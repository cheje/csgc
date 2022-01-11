import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './index.css'

export default function TCIETable() {
  const tableRef = useRef();

  useEffect(() => {
    d3.csv(
      'https://gist.githubusercontent.com/cheje/2268eca91c7d2e1cb582e2140da6b283/raw/05969f55bd30a63e8e3739d971856a4ae661f3b4/tcie-n10.csv'
    ).then((data) => {
      const width = 800;
      const height = 500;

      const tableContainer = d3
        .select(tableRef.current)
        .attr('width', width)
        .attr('height', height);

      const tcieData = data
        .map((d) => ({
          BBL: d.BBL,
          'Regulated Apt Income ($)': d['Regulated Apt Income'],
          'Unregulated Apt Income ($)': d['Unregulated Apt Income'],
          'Total Apartment Rental Income ($)': d['Total Apartment Rental Income'],
          'Office Income ($)': d['Office Income'],
          'Retail Units ($)': d['Retail Units'],
          'Retail Income ($)': d['Retail Income'],
          'Owner Occupied Income ($)': d['Owner Occupied Income'],
          "Govt Rent Subsidies Income ($)": d["Govt Rent Subsidies Income"],
          'Total Housing Units ($)': d['Total Housing Units'],
          'Total Expenses ($)': d['Total Expenses']
        }))

      const table = d3.select('#tableContainer').append('table');

      const columns = [
        'BBL',
        'Regulated Apt Income ($)',
        'Unregulated Apt Income ($)',
        'Total Apartment Rental Income ($)',
        'Office Income ($)',
        'Retail Units ($)',
        'Retail Income ($)',
        'Owner Occupied Income ($)',
        "Gov't Rent Subsidies Income ($)",
        'Total Real Estate Income ($)',
        'Total Expenses ($)',
      ];
     table
        .append('thead')
        .append('tr')
        .selectAll('th')
        .data(columns)
        .join('th')
        .text((d) => d)

    table
        .append('tbody')
        .selectAll('tr')
        .data(tcieData)
        .join('tr')
        .style('color', '#000000')
        .selectAll('td')
        .data(d => Object.values(d))
        .join('td')
        .text(d => d)
    });
  }, []);

  return (
  <div id="tableContainer" ref={tableRef} style={{ display: 'block', margin: 'auto' }}></div>
  )
}
