import React from 'react'
import './../app.css'

export default function End() {
  return (
    <div>
      <section>
        <div className='vis-caption' style={{ marginTop: '-1rem' }}>
          Code source: Mapbox's{' '}
          <a href='https://github.com/mapbox/storytelling' target='_blank' rel='noopener noreferrer'>
            Interactive Storytelling template
          </a>
        </div>

        <p style={{ paddingTop: '3rem' }}>
          For full citations, see the bibliography page of the white paper [<i>link coming soon</i>].
        </p>

        <div className='highlight-box'>
          <h5 className='subsubhead' style={{ marginTop: '-1rem' }}>
            Related links
          </h5>
          <ul>
            <li>
              <a
                href='https://anhd.org/report/new-yorks-pandemic-rent-crisis'
                target='_blank'
                rel='noopener noreferrer'>
                New York’s Pandemic Rent Crisis
              </a>
              , <i>January 31, 2022</i>
            </li>
            <li>
              <a
                href='https://www.newyorker.com/news/daily-comment/what-a-fire-in-the-bronx-says-about-immigrant-life-in-new-york'
                target='_blank'
                rel='noopener noreferrer'>
                What a Fire in the Bronx Says About Immigrant Life in New York
              </a>
              , <i>January 21, 2022</i>
            </li>
            <li>
              <a
                href='https://datajournalism.com/read/longreads/humanising-data-connecting-numbers-and-people'
                target='_blank'
                rel='noopener noreferrer'>
                Humanising data: Connecting numbers and people
              </a>
              , <i>December 29, 2021</i>
            </li>
            <li>
              <a href='https://www.nber.org/papers/w29516' target='_blank' rel='noopener noreferrer'>
                Racial Discrimination and Housing Outcomes in the United States Rental Market
              </a>
              , <i>November 2021</i>
            </li>
            <li>
              <a
                href='https://www.bloomberg.com/graphics/2021-new-york-property-tax-benefits-rich'
                target='_blank'
                rel='noopener noreferrer'>
                How a $2 Million Condo in Brooklyn Ends Up With a $157 Tax Bill
              </a>
              , <i>October 14, 2021</i>
            </li>
            <li>
              <a
                href='https://www.bloomberg.com/graphics/2021-nyc-taxes-hdfc-coops'
                target='_blank'
                rel='noopener noreferrer'>
                New York’s Real Estate Tax Breaks Are Now a Rich-Kid Loophole
              </a>
              , <i>October 8, 2021</i>
            </li>
            <li>
              <a
                href='https://www.bloomberg.com/graphics/2021-urban-highways-infrastructure-racism'
                target='_blank'
                rel='noopener noreferrer'>
                What It Looks Like to Reconnect Black Communities Torn Apart by Highways
              </a>
              , <i>July 28, 2021</i>
            </li>
          </ul>
        </div>
        <br />
        <p style={{ fontStyle: 'italic' }}>
          This project makes up the digital component of the capstone requirement for the M.S. program in{' '}
          <a
            href='https://gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Masters-Programs/Data-Analysis-and-Visualization'
            target='_blank'
            rel='noopener noreferrer'>
            Data Analysis and Visualization program
          </a>{' '}
          at the CUNY Graduate Center. The text pulls from portions of the white paper.
        </p>
      </section>
    </div>
  )
}
