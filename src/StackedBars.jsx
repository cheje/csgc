import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './index.css'

export default function StackedBars() {

    const svgRef = useRef()
    
    useEffect(() => {

        d3.csv('https://gist.githubusercontent.com/cheje/03a298076db3822e04faaf9b21aadf80/raw/68676b3d01476af66d2bd461136978b655c610b6/tcie-bars.csv')
        .then(data => {

            // create categories (years) for x-axis
            let years = [...new Set(data.map(d => d.tcie_year))]
            years.push('2007', '2012', '2016')
            years.sort()
            years.keys()
            console.log(years)

            // create stacks for each year
            // const boros = [...new Set(data.map(d => d.boro_name))]
            const boros = ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island']
            console.log(boros)

            // wrapper dimensions (following format in A. Wattenberger's 'Fullstack D3')
            const dimensions = {
                // width: window.innerWidth*0.8,
                // height: window.innerHeight*0.6,
                width: 800,
                height: 400,
                margin: { top: 10, bottom: 50, left: 90, right: 50 }
            }

            // bounds dimensions
            dimensions.boundedWidth = dimensions.width
             - dimensions.margin.left
             - dimensions.margin.right

             dimensions.boundedHeight = dimensions.height
             - dimensions.margin.top
             - dimensions.margin.bottom

            // set up svg container
            const svg = d3.select(svgRef.current)
                .attr('width', dimensions.width)
                .attr('height', dimensions.height)

            // scales
            const xScale = d3.scaleBand() // ordinal data
                .domain(years)
                .range([dimensions.margin.left, dimensions.boundedWidth])
                .padding([0.2])

            const yScale = d3.scaleLinear()
                .domain([0, 16000])
                .range([dimensions.boundedHeight, dimensions.margin.left])
                .nice()
            
            // horizontal gridlines
            const yGrid = d3.axisLeft()
                .tickFormat('')
                .tickSize(-dimensions.boundedWidth + dimensions.margin.left)
                .scale(yScale)

            svg.append('g')
                .attr('class', 'y-gridlines')
                .attr('transform', `translate(${dimensions.margin.left}, 0)`)
                .call(yGrid)

            // color scale
            const colorScale = d3.scaleOrdinal()
                .domain(boros)
                .range(['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'])
            
            // generate bar stacks
            const stackedBarsGen = d3.stack()
                .keys(boros)
        
            const stackedBarsData = stackedBarsGen(data)

            // plot bars
            svg.append('g')
                .selectAll('g')
                .data(stackedBarsData)
                .join('g')
                .attr('fill', d => colorScale(d.key))
                .selectAll('rect')
                .data(d => d)
                .join('rect')
                    .attr('x', d => xScale(d.data.tcie_year))
                    .attr('y', d => yScale(d[1]))
                    .attr('height', d => yScale(d[0]) - yScale(d[1]))
                    .attr('width', xScale.bandwidth())

            // x axis
            const xAxis = d3.axisBottom(xScale)
                .ticks(years.length)
                .tickSizeOuter(0)

            svg.append('g')
                .attr('class', 'x-axis')
                .attr('transform', `translate(0, ${dimensions.boundedHeight})`)
                .call(xAxis)
                .style('text-anchor', 'middle')
                .attr('dy', '1em')
                // axis label:
                .append('text')
                .attr('x', '75%')
                .attr('dy', '3.25em')
                .text('Year of TCIE Filing')
                

            // y axis
            const yAxis = d3.axisLeft(yScale)

            svg.append('g')
                .attr('class', 'y-axis')
                .attr('transform', `translate(${dimensions.margin.left}, 0)`)
                .call(yAxis)
                // axis label:
                .append('text')
                .attr('y', '-5em')
                .attr('dx', '-10%')
                .attr('transform', 'rotate(270)')
                .text('Number of TCIE BBLs Found in PLUTO')

            // LEGEND
            
            // rev order of boros to match bar color order
            const borosRev = boros.reverse()

            // squares
            svg.append('g')
                .selectAll("squares")
                .data(borosRev)
                .join('rect')
                    .attr("x", '85%')
                    .attr("y", (d, i) => (90 + i*20))
                    .attr("height", 10)
                    .attr("width", 10)
                    .style("fill", d => colorScale(d))
              
              // label
            svg.append('g')
                .selectAll("labels")
                .data(borosRev)
                .join("text")
                  .attr("x", '87%')
                  .attr("y", (d, i) => (100 + i*20)) 
                  .style("fill", d => colorScale(d))
                  .text(d => d)
                  .style('font-family', 'Roboto')
                  .style('font-size', '0.75em')
            
            // TITLE
            svg.append('text')
                .attr('y', '2em')
                .text('TCIE Filings by Borough')
                .attr('class', 'chart--title')

            // sources:
            // https://www.d3-graph-gallery.com/graph/barplot_stacked_hover.html
            // http://using-d3js.com/05_06_stacks.html
            // https://github.com/muratkemaldar/using-react-hooks-with-d3/blob/15-stacked-bar-chart/src/StackedBarChart.js
        })
}, [])
    
    

    return (
        <div>
             <svg ref={svgRef} style={{ display: 'block', margin: 'auto' }}>
                 <g />
             </svg>
        </div>
    )
}