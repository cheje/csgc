import React from 'react'
import Title from './Title'
import './../app.css'

export default function Resources() {
  return (
    <section>
      <Title />
      <h2 className='title'>Resources</h2>
      <p>
        Learn more on housing in New York City through the sources found below. This is by no means a comprehensive list
        of the wealth of information available. Also find links to data visualization tools and tutorials.
      </p>
      <h4 className='subhead' style={{ color: '#293F32' }}>
        Housing
      </h4>
      <h5 className='subsubnormal'>NYC Organizations</h5>
      <ul>
        <li>
          The{' '}
          <a href='https://anhd.org/' target='_blank' rel='noopener noreferrer'>
            Association for Neighborhood & Housing Development
          </a>{' '}
          is a coalition of NYC community groups that runs issues-driven projects, fellowships, events, and offers a
          resource library.
        </li>
        <li>
          The{' '}
          <a href='https://www.cssny.org/' target='_blank' rel='noopener noreferrer'>
            Community Service Society
          </a>{' '}
          releases data-driven research and offers programs and services related to affordable housing, health care
          access, legal justice, and other areas in support of a more equitable city and state.
        </li>
        <li>
          <a href='http://housingcourtanswers.org/' target='_blank' rel='noopener noreferrer'>
            Housing Court Answers
          </a>{' '}
          for tenants, landlords and advocates in NYC
        </li>
        <li>
          <a href='https://www.justfix.nyc/' target='_blank' rel='noopener noreferrer'>
            JustFix.nyc
          </a>{' '}
          helps create data-driven digital tools in support of tenants' rights
        </li>
        <li>
          The{' '}
          <a href='https://www.metcouncilonhousing.org/' target='_blank' rel='noopener noreferrer'>
            Metropolitan Council on Housing
          </a>{' '}
          is a membership organization of NYC tenants that offers multilingual answers to housing questions, tenant
          services, and rent justice campaigns.
        </li>
        <li>
          <a href='https://unhp.org/' target='_blank' rel='noopener noreferrer'>
            University Neighborhood Housing Program
          </a>{' '}
          in the Northwest Bronx offers services and programs, and produces research reports aimed at creating and
          preserving affordable housing.
        </li>
      </ul>
      <h5 className='subsubnormal'>Information</h5>
      <ul>
        <li>
          <a
            href='https://rentguidelinesboard.cityofnewyork.us/resources/glossary-of-rent-regulation-terms/'
            target='_blank'
            rel='noopener noreferrer'>
            Glossary of rent regulation terms
          </a>{' '}
          and{' '}
          <a href='https://rentguidelinesboard.cityofnewyork.us/research/' target='_blank' rel='noopener noreferrer'>
            research reports{' '}
          </a>
          from the NYC Rent Guidelines Board
        </li>
        <li>
          The{' '}
          <a href='https://furmancenter.org/' target='_blank' rel='noopener noreferrer'>
            NYC Furman Center
          </a>{' '}
          conducts research on housing and urban policy in NYC and the US.
        </li>
        <li>
          "
          <a
            href='https://journalistsresource.org/economics/rent-control-regulation-studies-to-know/'
            target='_blank'
            rel='noopener noreferrer'>
            Rent control and stabilization policies: 4 studies to know
          </a>
          " from The Journalist’s Resource.
        </li>
      </ul>
      <h5 className='subsubnormal'>NYC News</h5>
      <ul>
        <li>
          <a
            href='https://bkreader.com/category/news/business-and-innovation/real-estate/'
            target='_blank'
            rel='noopener noreferrer'>
            Brooklyn Reader
          </a>
        </li>
        <li>
          <a href='https://boweryboogie.com/category/real-estate/' target='_blank' rel='noopener noreferrer'>
            Bowery Boogie
          </a>{' '}
          (Manhattan)
        </li>
        <li>
          <a href='https://www.bxtimes.com/category/real-estate/' target='_blank' rel='noopener noreferrer'>
            Bronx Times
          </a>
        </li>
        <li>
          <a href='https://brooklyneagle.com/real-estate/' target='_blank' rel='noopener noreferrer'>
            Brooklyn Eagle
          </a>
        </li>
        <li>
          <a href='https://www.brooklynpaper.com/category/real-estate/' target='_blank' rel='noopener noreferrer'>
            Brooklyn Paper
          </a>
        </li>
        <li>
          <a href='https://www.thecity.nyc/housing' target='_blank' rel='noopener noreferrer'>
            THE CITY
          </a>{' '}
          (NYC)
        </li>
        <li>
          <a
            href='https://citylimits.org/category/news/housing-and-development/'
            target='_blank'
            rel='noopener noreferrer'>
            City Limits
          </a>{' '}
          (NYC)
        </li>
        <li>
          <a href='https://documentedny.com/category/housing/' target='_blank' rel='noopener noreferrer'>
            Documented
          </a>{' '}
          (NYC)
        </li>
        <li>
          <a href='https://gothamist.com/tags/housing/' target='_blank' rel='noopener noreferrer'>
            Gothamist
          </a>{' '}
          (NYC)
        </li>
        <li>
          <a href='https://indypendent.org/section/housing/' target='_blank' rel='noopener noreferrer'>
            The Indypendent
          </a>{' '}
          (NYC)
        </li>
        <li>
          <a href='https://www.nysfocus.com/category/housing/' target='_blank' rel='noopener noreferrer'>
            New York Focus
          </a>{' '}
          (NYS)
        </li>
        <li>
          <a href='https://www.norwoodnews.org/category/housing/' target='_blank' rel='noopener noreferrer'>
            Norwood News
          </a>{' '}
          (NW Bronx)
        </li>
        <li>
          <a href='https://qns.com/news/real-estate/' target='_blank' rel='noopener noreferrer'>
            QNS
          </a>{' '}
          (Queens)
        </li>
      </ul>
      <h5 className='subsubnormal'>Data and Dashboards</h5>
      <ul>
        <li>
          <a href='https://evictionlab.org/eviction-tracking/new-york-ny/' target='_blank' rel='noopener noreferrer'>
            Eviction visualizations
          </a>{' '}
          of data for NYC and other US cities and states, from Eviction Lab
        </li>
        <li>
          List of{' '}
          <a href='https://airtable.com/shrgUn4Gw76RzAFDU/tbljPl4dpo9zozA5y' target='_blank' rel='noopener noreferrer'>
            housing databases
          </a>{' '}
          from government agencies and housing organizations, linked to in the capstone text.
        </li>
        <li>
          The{' '}
          <a href='https://www.housingdatanyc.org/' target='_blank' rel='noopener noreferrer'>
            Housing Data Coalition
          </a>{' '}
          maintains a central database of publicly available NYC housing data and creates digital tools that make
          housing data accessible.
        </li>
        <li>
          <a
            href='https://data.cityofnewyork.us/browse?category=Housing+%26+Development'
            target='_blank'
            rel='noopener noreferrer'>
            Housing and development datasets
          </a>{' '}
          from NYC agencies, including for{' '}
          <a
            href='https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5'
            target='_blank'
            rel='noopener noreferrer'>
            housing maintenance code violations
          </a>
          ,{' '}
          <a
            href='https://data.cityofnewyork.us/Housing-Development/Housing-Litigations/59kj-x8nc'
            target='_blank'
            rel='noopener noreferrer'>
            housing litigations
          </a>{' '}
          and{' '}
          <a
            href='https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4'
            target='_blank'
            rel='noopener noreferrer'>
            evictions
          </a>
        </li>
        <li>
          The{' '}
          <a
            href='https://www1.nyc.gov/site/doitt/initiatives/3d-building.page'
            target='_blank'
            rel='noopener noreferrer'>
            NYC 3-D Building Model
          </a>{' '}
          includes every city building found in the 2014 aerial survey.
        </li>
        <li>
          The Python program{' '}
          <a href='https://github.com/nycdb/nycdb' target='_blank' rel='noopener noreferrer'>
            nycdb
          </a>{' '}
          loads public NYC housing datasets into the PostgreSQL database system.
        </li>
        <li>
          <a
            href='https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page'
            target='_blank'
            rel='noopener noreferrer'>
            Primary Land Use Tax Output
          </a>{' '}
          (PLUTO)
        </li>
        <li>
          <a
            href='https://rentguidelinesboard.cityofnewyork.us/resources/rent-stabilized-building-lists/'
            target='_blank'
            rel='noopener noreferrer'>
            Rent Stabilized Building Lists
          </a>{' '}
          by borough
        </li>
      </ul>
      <br />
      <hr className='dashed' />
      <h4 className='subhead' style={{ color: '#293F32' }}>
        Data Visualization
      </h4>
      <h5 className='subsubnormal'>Tools</h5>
      <ul>
        <li>
          Make charts, maps and tables online using{' '}
          <a href='https://www.datawrapper.de/' target='_blank' rel='noopener noreferrer'>
            Datawrapper
          </a>
          . Other tools:{' '}
          <a href='https://datastudio.google.com/' target='_blank' rel='noopener noreferrer'>
            Google Data Studio
          </a>
          ,{' '}
          <a href='https://flourish.studio/' target='_blank' rel='noopener noreferrer'>
            Flourish
          </a>
          ,{' '}
          <a href='https://infogram.com/' target='_blank' rel='noopener noreferrer'>
            Infogram
          </a>
          ,{' '}
          <a href='https://maphub.net/' target='_blank' rel='noopener noreferrer'>
            MapHub
          </a>
          ,{' '}
          <a href='rawgraphs.io' target='_blank' rel='noopener noreferrer'>
            RAWGraphs
          </a>
          , and{' '}
          <a href='https://public.tableau.com/' target='_blank' rel='noopener noreferrer'>
            Tableau Public
          </a>
          .
        </li>
        <li>
          <b>Geocoding</b>: Obtain geographic coordinates in batches of up to 10,000 records using the US Census
          Bureau's{' '}
          <a href='https://geocoding.geo.census.gov/' target='_blank' rel='noopener noreferrer'>
            Geocoder
          </a>{' '}
          tool. Or geocode{' '}
          <a
            href='https://willgeary.github.io/data/2016/11/04/Geocoding-with-Google-Sheets.html'
            target='_blank'
            rel='noopener noreferrer'>
            directly in Google Sheets
          </a>
          .
        </li>

        <li>
          Clean and transform data on your computer using{' '}
          <a href='https://openrefine.org/' target='_blank' rel='noopener noreferrer'>
            OpenRefine
          </a>
          .
        </li>
        <li>
          Extract data from a PDF using{' '}
          <a href='https://tabula.technology/' target='_blank' rel='noopener noreferrer'>
            Tabula
          </a>
          .
        </li>
      </ul>
    </section>
  )
}
