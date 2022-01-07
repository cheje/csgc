import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './index.css'

export default function Bubbles() {

    const svgRef = useRef()
    
    useEffect(() => {
        
    fetch('https://gist.githubusercontent.com/cheje/2b36ef7c3d95611281873910f5536b08/raw/0d7dc284ae90f63a111616e2919d81a985a9e3bd/tcie-owners.json')
        .then(response => response.json())
        .then(data=> {
            console.log(data)

            // tutorial: https://www.webtips.dev/how-to-make-interactive-bubble-charts-in-d3-js

            const width = 600;
            const height = 600;

            const colors = {
                'Manhattan': '#3A0CA3',
                'Bronx': '#7209B7',
                'Brooklyn': '#F72585',
                'Bronx, Manhattan': '#4361EE',
                'Brooklyn, Manhattan, Queens': '#4CC9F0',
                'Manhattan, Bronx, Brooklyn': '#4CC9F0',
                'Queens': '#4CC9F0'
            };

            const bubble = data => d3.pack()
            .size([width, height])
            .padding(3)(d3.hierarchy({ children: data }).sum(d => d.buildings));
    
        const svg = d3.select(svgRef.current)
            .style('width', width)
            .style('height', height);
        
        const root = bubble(data);
        const tooltip = d3.select('.tooltip');
    
        const node = svg.selectAll()
            .data(root.children)
            .enter()
            .append('g')
            .attr('transform', d => `translate(${d.x}, ${d.y})`);
        
        const circle = node.append('circle')
            .attr('r', d => d.r)
            .style('fill', d => colors[d.data.boro_names])
            .style('opacity', '0.7')
            .on('mouseover', function (e, d) {
                tooltip.select('span')
                .attr('class', 'tooltip-text')
                .html(`<span style="font-weight:bold; color:#FFC900;">${d.data.ownername}</span> owns <span style='font-weight:bold; color:#FFC900;' }}>${d.data.buildings} properties</span> (in <span style="font-weight:bold; color:#FFC900;">${d.data.boro_names}</span>) found in the TCIE data.`)
                tooltip.style('visibility', 'visible');
    
                d3.select(this).style('stroke', '#fff');
            })
            .on('mousemove', e => tooltip.style('top', `${e.pageY}px`)
                                         .style('left', `${e.pageX + 10}px`))
            .on('mouseout', function () {
                d3.select(this).style('stroke', 'none');
                return tooltip.style('visibility', 'hidden');
            })
        
        const label = node.append('text')
            .attr('dy', 2)
            .text(d => d.data.ownername.substring(0, d.r / 4))
            .attr('class', 'text--bubbles')
        
        circle.transition()
            .ease(d3.easeExpInOut)
            .duration(1000)
            .attr('r', d => d.r);
        
        label.style('opacity', d => d.data.buildings >= 20 ? 1 : 0)
       
       })
    }, [])
    
    

    return (
        <div style={{ width: '70vw', margin: '0 auto' }}>
            <div className='flex-container-bubble'>
                <div className='flex-child vis-caption'>
                    <div className='chart--title'>Who Owns the Most Buildings?</div>
                    <br />These landlords have amassed the highest number of properties found in the TCIE data. As indicated in <span style={{ color: '#3A0CA3', fontWeight: 'bold' }}>purple</span>, many of these portfolios are made up of buildings <span style={{ color: '#3A0CA3', fontWeight: 'bold' }}>Manhattan</span>.<br /><br />
                    <p className='vis-caption-small'>Data sources: TCIE, PLUTO</p>
                </div>
                <div className='flex-child'>
                    <svg ref={svgRef} style={{ display: 'block', margin: 'auto' }}></svg>
                    <div className="tooltip">
                    <img alt="" />
                        <div>
                            <a></a>
                            <span></span>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}