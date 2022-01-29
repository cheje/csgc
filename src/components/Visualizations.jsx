import React from 'react'
import './../app.css'
import StackedBars from './StackedBars'
import Bubbles from './Bubbles'
import FilteringData from './FilteringData'
import Scrollytelling from './Scrollytelling'
import Shiny from './Shiny'

export default function Visualizations() {
  return (
    <div>
      <section>
        <h4 className='subhead'>Visualizations</h4>
        <p>
          I approached the project from the angle of "visualizing for analysis," as{' '}
          <a href='https://flowingdata.com/2021/10/21/process-162-aspects/' target='_blank' rel='noopener noreferrer'>
            Nathan Yau describes it in Flowing Data
          </a>
          . As opposed to "visualizing for communication" with a target audience, in the case of visualizing for
          yourself:
        </p>
        <p>
          <blockquote>
            ...you’re still looking for something interesting. You haven’t found it yet, so you visualize the data
            itself. You start with generic and default charts and work your way towards more specific visual and unique
            forms.
          </blockquote>
        </p>
        <p>
          Following these parameters, the visualizations are made through the perspective of someone using the data to
          look for stories of tenants and looking into their lived experiences, which can easily get overlooked in
          aggregated data. Perhaps these visualizations can evoke "question framing," the term used by{' '}
          <a href='https://www.jerthorp.com/' target='_blank' rel='noopener noreferrer'>
            Jer Thorp
          </a>{' '}
          in his book "Living in Data" to describe how a visualization, rather than simplifying, reveals complexities,
          "exposing things that weren't before able to be seen." Here, with each successive visualization, more
          questions and more potential directions can emerge in search of the stories within.
        </p>
        <p>
          But first, to get an idea of the shape of the data, I started with a "generic" bar chart to see the number of
          TCIE filings categorized by year and borough.
        </p>
        <StackedBars />
        <p>This overall view shows:</p>
        <ul>
          <li>Filings numbering in the thousands each year</li>
          <li>Many of the filings (nearly 45%) are of buildings in Manhattan</li>
          <li>An increase in filings in recent years</li>
        </ul>
        <br />
        <p>
          While there are plenty of reasons to visualize aggregated data, for the purposes of this capstone and with the
          intent of finding individual stories, we can try to go a bit deeper by taking a look at building owners.
        </p>
        <h5 className='subsubhead'>Portfolios</h5>
        <p>
          In "Capital City: Gentrification and the Real Estate State," author{' '}
          <a
            href='https://www.gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Doctoral-Programs/Earth-and-Environmental-Sciences/Student-Bios/Samuel-Stein'
            target='_blank'
            rel='noopener noreferrer'>
            Samuel Stein
          </a>{' '}
          explains that in determining where to invest, speculators look for a gap between the rents in the location
          and:
        </p>
        <p>
          <blockquote>
            ...the potential future rents it might command if some action were taken, such as evicting long-term
            tenants, renovating neglected or unstylish properties, or demolishing and reconstructing buildings.
          </blockquote>
        </p>
        <p>
          In cases of "declining investment" in a building, landlords, investors and lenders might consider this an
          opportunity for reinvestment and gentrification (134). As is happening during the pandemic, and other periods,
          when some landlords cannot keep up with mortgage payments, their building plummets in value and ends up facing
          financial distress, and risk of being foreclosed (Hornbach et al. 2020, 5). Indicators of distress include
          lawsuits, code violations, tenant complaints and deferred or disruptive maintenance (@UNHP).{' '}
          <a
            href='https://www.forbes.com/sites/forbesbusinesscouncil/2021/04/05/the-dos-and-donts-of-investing-in-distressed-properties/'
            target='_blank'
            rel='noopener noreferrer'>
            Distressed buildings on the verge of foreclosure
          </a>{' '}
          or already in the hands of a bank or lender still attract investors who see the lower market rates as a chance
          to buy at a discounted price (Byrne 2021). They will readily do so, given the cyclical nature of the real
          estate market and the belief that property values undulate and will go up again (Hornbach et al. 2020, 5).
        </p>
        <p className='highlight-box'>
          Released by the CREATE Initiative – a project that studies envrionment and equity – the "
          <a href='https://create.umn.edu/toolkit/' target='_blank'>
            Sharing in the Benefits of a Greening City
          </a>
          " toolkit covers key housing concepts including speculation. The report notes that such activity occurs "where
          significant changes in value are anticipated" such as large-scale investments in green infrastructure
          development. Investors might go after properties in or around those areas years before project completion and
          in the process, displace long-time residents and increase rent and property values; and "in doing so,
          speculative practices restrict who is able to access and enjoy the fruits of these investments" (Klein et al.
          20).
        </p>
        <br />
        <p>
          This is one way a property owner amasses a considerable number of assets in their portfolio, another possible
          indicator of speculative practice. Using the owner name variable, originally from the 2021 PLUTO dataset, I
          made a bubble chart of landlords with at least 10 properties found in the TCIE-PLUTO data. Buildings have
          changed hands over the past nearly two decades but at least from this collection of more than 25,000
          properties, the visualization gives an idea of the larger portfolios present in the sample of buildings. While
          this is also a chart of aggregated data, in this case, it can lead one in the direction of, say, individual
          landlords for further analysis. Note that with building owner efforts to obscure their identities, and with
          inputted names spelled or formatted differently that may have been missed during the data cleaning, the
          numbers in the chart are not fully precise.
        </p>
        <Bubbles />
        <br />
        <p>
          For some broader context of the reach of owners with larger portfolios, Sam Rabiyah, the data lead and
          engineer at{' '}
          <a href='https://www.justfix.nyc/' target='_blank' rel='noopener noreferrer'>
            JustFix.nyc
          </a>
          , details the findings of the group's analysis of city landlords who owned rent-regulated housing properties.
          He writes in "
          <a
            href='https://medium.com/justfixnyc/examining-the-myth-of-the-mom-and-pop-landlord-6f9f252a09c'
            target='_blank'>
            Examining the Myth of the 'Mom-and-Pop' Landlord
          </a>
          " that "larger landlords," or those with a portfolio of more than 20 buildings, own about half of the city's
          rent-regulated properties. Also of note, larger landlords conducted "more than half of all executed evictions
          in 2018."
        </p>
        <FilteringData />
      </section>
      <Scrollytelling />
      <section>
        <Shiny />
      </section>
    </div>
  )
}
