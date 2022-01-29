import React from 'react'
import TableCR from './TableCR'
import './../app.css'
import expensesSS from './../img/shiny-expenses.png'
import crSS from './../img/shiny-cr.png'

export default function Shiny() {
  return (
    <section>
      <div style={{ marginTop: '-4em' }}>
        <p>
          For reference, the 3.5% cap rate is being used as the threshold, as it falls below the median cap rate by
          borough over the past several years, according to numbers from{' '}
          <a href='https://arielpa.nyc/investor-relations/research-reports' rel='noopener noreferrer'>
            Ariel Property Advisors
          </a>
          :
        </p>
        <TableCR />
        <br />
        <p>
          Continuing with using expenses and cap rates, of a certain threshold, as an approach to filtering through the
          data, the next part of the digital component includes dashboards where users can isolate data points on an
          interactive map and see characteristics of the individual buildings. Thousands of points remain but this time,
          the user can zoom in to specific regions and see not just buildings involving potential speculation, but also
          regions where clusters exist. In those cases, large-scale development projects might be on the horizon. The
          dashboards could together be used to find, for example, buildings with lower cap rates and see how much the
          owner spent on operating expenses.
        </p>
        <p>
          Explore the data points in the dashboards linked below. Thousands of points still remain but in this case, you
          can zoom in to specific regions and see not just buildings involving potential speculation, but also regions
          where clusters exist. In those cases, large-scale development projects might be on the horizon.
        </p>
      </div>
      <br />
      <div className='vis-caption'>
        When accessing the dashboards, the data may take some time to load. You may have to adjust or toggle the filters
        to get the data to appear.
      </div>
      <br />
      <div className='flex-container-shiny'>
        <div className='flex-child'>
          <ul style={{ fontSize: '0.9em' }}>
            <li>
              Map and table of properties that in at least one year between 2004-2019 had expenses as 35% or lower of
              their income{' '}
            </li>
            <li>Chart and table of expense history for all properties in the TCIE-PLUTO dataset</li>
          </ul>
        </div>
        <div className='flex-child'>
          <a href='https://jenche.shinyapps.io/lpexp/' target='_blank'>
            <img
              width='400px'
              alt='Screenshot of expenses dashboard'
              src={expensesSS}
              style={{ boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </a>
          <button className='button'>
            <a href='https://jenche.shinyapps.io/lpexp/' target='_blank' className='button--link'>
              EXPENSES
            </a>
          </button>
        </div>
      </div>
      <br />
      <div className='flex-container-shiny'>
        <div className='flex-child'>
          <ul style={{ fontSize: '0.9em' }}>
            <li>Map of properties with a cap rate of under 3.5 at some point between 2004-2019</li>
            <li>Table of same data includes all years where a property had a cap rate under 3.5</li>
          </ul>
        </div>
        <div className='flex-child'>
          <a href='https://jenche.shinyapps.io/lpcr/' target='_blank'>
            <img
              width='400px'
              src={crSS}
              alt='Screenshot of cap rates dashboard'
              style={{ boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          </a>
          <button className='button'>
            <a href='https://jenche.shinyapps.io/lpcr/' target='_blank' className='button--link'>
              CAP RATES
            </a>
          </button>
        </div>
      </div>
      <div>
        <p>
          The visualizations so far have been presented to find buildings where real estate speculation, and
          prioritizing profit over tenants, might be occurring. Using variables such as expenses, incomes, cap rates and
          geographic locations can help guide journalists, advocates and researchers to specific properties for
          additional analysis. Once potential buildings of interest have been located, they can use resources beyond
          charts to continue their investigation to find individual properties.
        </p>
        <p>
          As the focus of this capstone is on data visualizations, I took another approach to narrow down the data to
          specific buildings of possible interest, which are highlighted in the final visualization. I looked in city
          media outlets for housing stories from 2021 in the context of local development, gentrification, complaints,
          and other possible indicators of speculation and distress, and selected stories that covered a building found
          close to one in the TCIE dataset. From there, I went to see if the expense history of that data point might
          give clues supporting its reported situation or potential future status, for example, given upcoming nearby
          development. This is not meant to imply correlation or any direct influence between these expenses and the
          speculative status of a building but instead to see how variables like operating costs and cap rates could
          factor into properties located in areas on the verge of large-scale development, or associated with other
          possible signs of speculation.
        </p>
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'Roboto Condensed',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9em',
          }}>
          Scroll down &nbsp;&nbsp;<i class='arrow arrow-down'></i>
        </p>
      </div>
    </section>
  )
}
