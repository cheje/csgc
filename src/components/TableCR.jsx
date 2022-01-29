import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import './../app.css'

export default function TableCR() {
  const tableRef = useRef()

  useEffect(() => {
    d3.csv(
      'https://gist.githubusercontent.com/cheje/e01f5130983c3268267f740544ab1ab5/raw/2d0de1eabd4ee7e19f55f6d18b4ab84641cd2610/cr-boro-avg.csv'
    ).then(data => {
      console.log(data)

      const crData = data.map(d => ({
        Borough: d['Borough'],
        y2016: d['2016'],
        y2017: d['2017'],
        y2018: d['2018'],
        y2019: d['2019'],
        y2020: d['2020'],
        y2021: d['2021'],
        "Median Cap Rate ('16-'21)": d["Median Cap Rate ('16-'21)"],
      }))
      const table = d3.select(tableRef.current).append('table')

      const cols = ['Borough', '2016', '2017', '2018', '2019', '2020', '2021', "Median Cap Rate ('16-'21)"]

      table
        .append('thead')
        .append('tr')
        .selectAll('th')
        .data(cols)
        .join('th')
        .text(d => d)

      table
        .append('tbody')
        .selectAll('tr')
        .data(crData)
        .join('tr')
        .style('color', '#000000')
        .selectAll('td')
        .data(d => Object.values(d))
        .join('td')
        .text(d => d)
    })
  }, [])

  return <div id='tableContainer' ref={tableRef} style={{ display: 'block', margin: 'auto', width: '45vw' }}></div>
}
