import React, { useRef } from 'react';
import './index.css';
import * as d3 from 'd3';
import scrollama from 'scrollama';

export default function Scrollytelling() {
  const svgRef = useRef();

  d3.json('https://gist.githubusercontent.com/cheje/19f1b2cd100181c85f5c59f5e9d7be9f/raw/64d74131a9bef399456fd212e167826b96cc1acd/nyc-boroughs.geojson')
        //.then(response => response.json())
        .then(data => {
            console.log(data[1])

        const width = 800
		const height = 750

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        const projection = d3.geoAlbers()
            .fitSize([800, 750], data);

        svg.append("g")
            .selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr('fill', '#d0d9cd')
            .attr("d", d3.geoPath()
            .projection(projection))
            .style("stroke", 'rgba(255,255,255,0.5)')
            
          svg.append('text')
            .attr('x', '50%')
            .attr('y', '85%')
            .html(`Data sources: NYC Planning (<a href='https://www1.nyc.gov/site/planning/data-maps/open-data/census-download-metadata.page' target='_blank'>NTAs GeoJSON</a>), TCIE, PLUTO`)
            .attr('class', 'vis-caption-small')


          d3.json("https://gist.githubusercontent.com/cheje/fb731829fb4fe824f32f675c9fca880f/raw/0125a55d280661b27ac2686d90e3bc42a27c438c/tcie-points.geojson")
          .then(points => {
            const plot = svg.selectAll()
                .data(points.features)
                .enter()
                .append("circle")
                .attr("cx", d => projection(d.geometry.coordinates)[0])
                .attr("cy", d => projection(d.geometry.coordinates)[1])

        function all() {
            plot.attr("r", "1")
            .style("fill", 'rgba(115, 85, 111, 0)')
            .style('stroke', '#8C6887')
        }

        function exp() {
            plot.transition()
            .duration(1000)
            .style('stroke', d => (+d.properties.exp_pct <= 35 && d.properties.exp_pct !== null) ? 'rgba(242, 89, 82, 1)' : 'rgba(140, 104, 135, 0.5)')
            .style('fill', d => (+d.properties.exp_pct <= 35 && d.properties.exp_pct !== null) ? 'rgba(242, 89, 82, 0)' : 'rgba(140, 104, 135, 0)')
        }

        function cr() {
            plot.transition()
            .duration(1000)
            .attr('r', d => (+d.properties.cr_pct <= 3.5 && +d.properties.cr_pct > 0 && +d.properties.cr_pct !== null) ? 3 : 2)
            .style('stroke', d => (+d.properties.cr_pct <= 3.5 && +d.properties.cr_pct > 0 && d.properties.cr_pct !== null) ? '#FFEB4D' : 'rgba(140, 104, 135, 0.5)')
            .style('fill', d => (+d.properties.cr_pct <= 3.5 && +d.properties.cr_pct > 0 && d.properties.cr_pct !== null) ? '#FFEB4D' : 'rgba(140, 104, 135, 0)')
        }

        
        
        const callbacks = [
            all, exp, cr, cr, cr,
          ];
      
          const steps = d3.selectAll('.step');
      
          // instantiate the scrollama
          const scroller = scrollama();
      
          // setup the instance, pass callback functions
          scroller
            .setup({
              step: '.step',
            })
            .onStepEnter((response) => {
              callbacks[response.index]()
              //steps.style('opacity', 0.1)
              d3.select(response.element).style('opacity', 1)
            })
            .onStepExit((response) => {})
        })
    }, [])

  return (
        <div className="container">
          <svg id="chart" ref={svgRef}></svg>
          <div class="steps">
            <div class="step">
              When plotting the 25,000 TCIE buildings found in the PLUTO set,
            </div>
            <div class="step">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              non lacus non est ultrices faucibus. Nunc gravida libero eu velit
              sagittis congue.
            </div>
            <div class="step">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              non lacus non est ultrices faucibus. Nunc gravida libero eu velit
              sagittis congue.
            </div>
            <div class="step">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              non lacus non est ultrices faucibus. Nunc gravida libero eu velit
              sagittis congue.
            </div>
          </div>
        </div>
  );
}
