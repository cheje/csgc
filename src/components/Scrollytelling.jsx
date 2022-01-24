import React, { useRef } from 'react'
import './../index.css'
import * as d3 from 'd3'
import scrollama from 'scrollama'

export default function Scrollytelling() {
  const svgRef = useRef()

  d3.json(
    'https://gist.githubusercontent.com/cheje/19f1b2cd100181c85f5c59f5e9d7be9f/raw/64d74131a9bef399456fd212e167826b96cc1acd/nyc-boroughs.geojson'
  )
    //.then(response => response.json())
    .then(data => {
      console.log(data[1])

      const width = 800
      const height = 750

      const svg = d3.select(svgRef.current).attr('width', width).attr('height', height)

      const projection = d3.geoAlbers().fitSize([800, 750], data)

      svg
        .append('g')
        .selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('fill', '#d0d9cd')
        .attr('d', d3.geoPath().projection(projection))
        .style('stroke', 'rgba(255,255,255,0.5)')

      svg
        .append('text')
        .attr('x', '50%')
        .attr('y', '85%')
        .html(
          `Data sources: NYC Planning (<a href='https://www1.nyc.gov/site/planning/data-maps/open-data/census-download-metadata.page' target='_blank'>NTAs GeoJSON</a>), TCIE, PLUTO`
        )
        .attr('class', 'vis-caption-small')

      d3.json(
        'https://gist.githubusercontent.com/cheje/fb731829fb4fe824f32f675c9fca880f/raw/0125a55d280661b27ac2686d90e3bc42a27c438c/tcie-points.geojson'
      ).then(points => {
        const plot = svg
          .selectAll()
          .data(points.features)
          .enter()
          .append('circle')
          .attr('cx', d => projection(d.geometry.coordinates)[0])
          .attr('cy', d => projection(d.geometry.coordinates)[1])

        function all() {
          plot.attr('r', '1').style('fill', 'rgba(115, 85, 111, 0)').style('stroke', '#8C6887')
        }

        // expenses filter
        function exp() {
          plot
            .transition()
            .duration(1000)
            .style('stroke', d =>
              +d.properties.exp_pct <= 35 && d.properties.exp_pct !== null
                ? 'rgba(242, 89, 82, 1)'
                : 'rgba(140, 104, 135, 0.5)'
            )
            .style('fill', d =>
              +d.properties.exp_pct <= 35 && d.properties.exp_pct !== null
                ? 'rgba(242, 89, 82, 0)'
                : 'rgba(140, 104, 135, 0)'
            )
        }

        // cap rate filter (removed +d.properties.cr_pct > 0)
        function cr() {
          plot
            .transition()
            .duration(1000)
            .attr('r', d => (+d.properties.cr_pct <= 3.5 && +d.properties.cr_pct !== null ? 2 : 1))
            .style('stroke', d =>
              +d.properties.cr_pct <= 3.5 && d.properties.cr_pct !== null ? '#FFEB4D' : 'rgba(140, 104, 135, 0.5)'
            )
            .style('fill', d =>
              +d.properties.cr_pct <= 3.5 && d.properties.cr_pct !== null ? '#FFEB4D' : 'rgba(140, 104, 135, 0)'
            )
        }

        const callbacks = [all, exp, cr]

        const steps = d3.selectAll('.step')

        // instantiate the scrollama
        const scroller = scrollama()

        // setup the instance, pass callback functions
        scroller
          .setup({
            step: '.step',
          })
          .onStepEnter(response => {
            callbacks[response.index]()
            //steps.style('opacity', 0.1)
            d3.select(response.element).style('opacity', 1)
          })
          .onStepExit(response => {})
      })
    }, [])

  return (
    <div className='container'>
      <svg id='chart' ref={svgRef}></svg>
      <div class='steps'>
        <div class='step'>
          While the stacked bar chart showed raw TCIE filing counts of buildings by year and borough, this map reveals
          where those buildings are approximately located and at the same time, indicate the dominance of properties
          located in Manhattan. But this static map is not too useful in terms of navigating through tens of thousands
          of data points.
        </div>
        <div class='step'>
          Properties with a history of a landlord spending{' '}
          <mark style={{ backgroundColor: 'rgba(242, 89, 82, 0.25)' }}>
            under 35% of their total real estate income on operating expenses
          </mark>{' '}
          are marked in red. For these 12,700+ buildings, in at least one year between 2004 and 2019, the landlord spent
          approximately a third or less of their income on expenses. While this could be explained by a multitude of
          factors, one of them could be that the landlord is deferring or ignoring maintenance to push out tenants,
          especially in gentrifying neighborhoods (Hornbach et al. 2020, 10). In terms of visualization, highlighting
          this variable is one of numerous ways to narrow the data down a bit.
        </div>
        <div class='step'>
          <mark style={{ backgroundColor: 'rgba(255, 235, 77, 0.5)' }}>Cap rates of 3.5 or lower</mark> (including
          negative cap rates, which would involve a negative net operating income, for example in cases where operating
          costs exceed income) provide another way to filter through some of the data points as seen in the less
          prolific but still visible spots of yellow.
        </div>
        <div class='step'>
          Continuing with using expenses and cap rates, of a certain threshold, as an approach to filtering through the
          data, we can isolate those points on an interactive map and find characteristics found in the PLUTO data of
          those individual buildings. Included in the digital component, these dashboards allow for more detailed
          exploration. Thousands of points remain but this time, you can zoom in to specific regions and see not just
          buildings involving potential speculation, but also regions where clusters exist. In those cases, large-scale
          development projects might be on the horizon. You could use them together to find, for example, buildings with
          lower cap rates and see how much the owner spent on operating expenses.
        </div>
      </div>
    </div>
  )
}
