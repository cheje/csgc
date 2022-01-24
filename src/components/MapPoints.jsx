import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './index.css'

export default function MapWorld() {
  const svgRef = useRef()

  useEffect(() => {
    d3.json(
      'https://gist.githubusercontent.com/cheje/19f1b2cd100181c85f5c59f5e9d7be9f/raw/64d74131a9bef399456fd212e167826b96cc1acd/nyc-boroughs.geojson'
    )
      //.then(response => response.json())
      .then(data => {
        console.log(data)

        const width = 1000
        const height = 950

        const svg = d3.select(svgRef.current).attr('width', width).attr('height', height)

        const projection = d3.geoAlbers().fitSize([1000, 950], data)

        svg
          .append('g')
          .selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('fill', '#DCDCDC')
          .attr('d', d3.geoPath().projection(projection))
          .style('stroke', 'rgba(255,255,255,0.1)')

        d3.json(
          'https://gist.githubusercontent.com/cheje/fb731829fb4fe824f32f675c9fca880f/raw/b32238fa3f16b0569fea9e49724d314c882675d6/tcie-points.geojson'
        ).then(points => {
          const plot = svg
            .selectAll()
            .data(points.features)
            .enter()
            .append('circle')
            .attr('cx', d => projection(d.geometry.coordinates)[0])
            .attr('cy', d => projection(d.geometry.coordinates)[1])
            .attr('r', '1')
            .style('fill', 'rgba(90, 43, 64, 1)')

          svg.selectAll('circle').on('click', function () {
            plot
              .transition()
              .duration(1000)
              .attr('r', d => (+d.cr_pct <= 3.5 && +d.cr_pct > 0 && d.cr_pct !== null ? 3 : 1))
              .style('fill', d =>
                +d.cr_pct <= 3.5 && +d.cr_pct > 0 && d.cr_pct !== null ? '#FFEB4D' : 'rgba(90, 43, 64, 1)'
              )
          })
        })
      })
  }, [])

  return (
    <div>
      <svg
        ref={svgRef}
        style={{
          backgroundColor: '#e0e3e0',
          display: 'block',
          margin: 'auto',
        }}></svg>
    </div>
  )
}
