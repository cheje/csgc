import React from 'react'
import TableTCIE from './TableTCIE'
import './../app.css'

export default function Dataset() {
  return (
    <div>
      <section>
        <h4 className='text subhead'>Dataset</h4>
        <p>
          The dataset comes from Professor Barbara Gray, the chief librarian and associate professor at the Craig
          Newmark Graduate School of Journalism at CUNY, who teaches investigative research. Gray obtained the
          information after submitting a FOIL request for Tax Commission Income and Expense filings with the NYC
          Department of Finance. The data was the basis for reporting in an investigative class she taught with
          Professor Eileen Mackey in Fall 2021, for her ongoing Landlords Project. The class studied and investigated
          the complexities and trends of the persisting housing crisis in New York and its impact on housing equity. The
          city requires owners of buildings with 10 or more income-generating units that amount to more than $40,000, to
          file{' '}
          <a
            href='https://www1.nyc.gov/assets/finance/downloads/pdf/rpie/rpiefilinginfo.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            Real Property Income and Expense
          </a>{' '}
          forms every year with the Department of Finance in order for the agency to assess property values. The content
          of these forms are considered private and exempt from FOIL requests but when the landlord appeals their tax
          bill and files a{' '}
          <a
            href='https://www1.nyc.gov/assets/taxcommission/downloads/pdf/tc201.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            Tax Commission Income and Expense
          </a>{' '}
          form, that data can be requested. The dataset that Gray received from the NYC Department of Taxation and
          Finance spans from 2005 through 2020 (the incomes and expenses are of the previous year), with 2008, 2013 and
          2017 filings yet to be provided. The Landlords Project focuses on a subset of this data: the more than 29,000
          buildings where landlords receive at least part of their income from rent-stabilized apartments. This amount
          makes up two-thirds of the more than 43,800{' '}
          <a
            href='https://rentguidelinesboard.cityofnewyork.us/resources/rent-stabilized-building-lists/'
            target='_blank'
            rel='noopener noreferrer'>
            buildings in the city with rent stabilized units
          </a>
          , as of 2020. The dataset will be made public in 2022.
        </p>
        <p>
          The city requires owners of buildings with 10 or more income-generating units that amount to more than
          $40,000, to file{' '}
          <a href='https://www1.nyc.gov/assets/finance/downloads/pdf/rpie/rpiefilinginfo.pdf' target='_blank'>
            Real Property Income and Expense
          </a>{' '}
          forms with the Department of Finance on a yearly basis for the agency to assess property values. While these
          forms are considered private and exempt from FOIL requests, it is when the landlord appeals their tax bill,
          and files a{' '}
          <a href='https://www1.nyc.gov/assets/taxcommission/downloads/pdf/tc201.pdf' target='_blank'>
            Tax Commission Income and Expense form
          </a>
          , that the data can be FOILed. The dataset, which came from the NYC Department of Taxation and Finance and
          spans from 2005 through 2020 (the respective incomes and expenses are of the previous year), with 2008, 2013
          and 2017 filings yet to be received.
        </p>
        <p>
          Each filing is associated with a BBL, a{' '}
          <a
            href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/'
            target='_blank'
            rel='noopener noreferrer'>
            number unique to individual city tax lots and buildings
          </a>{' '}
          that identifies that entity's location using three numerically-coded components:{' '}
          <span style={{ color: '#8843F2' }}>borough</span> (1 digit: 1 Manhattan, 2 Bronx, 3 Brooklyn, 4 Queens, 5
          Staten Island) + <span style={{ color: '#EF2F88' }}>block</span> (5 digits that can include leading zeros) +{' '}
          <span style={{ color: '#F47340' }}>lot</span> (4 digits that can include leading zeros).
        </p>
        <div className='highlight-box'>
          BBL{' '}
          <b>
            <span style={{ color: '#8843F2' }}>1</span>
            <span style={{ color: '#EF2F88' }}>00247</span>
            <span style={{ color: '#F47340' }}>0001</span>
          </b>
          , located at 265 Cherry Street in Chinatown, can be split into:
          <br />
          <ul>
            <li>
              <span style={{ color: '#8843F2', fontWeight: 'bold' }}>1</span> (borough of Manhattan)
            </li>
            <li>
              <span style={{ color: '#EF2F88', fontWeight: 'bold' }}>00247</span> (block)
            </li>
            <li>
              <span style={{ color: '#F47340', fontWeight: 'bold' }}>0001</span> (lot)
            </li>
          </ul>
        </div>
        <br />
        <p>
          New York has approximately 1 million tax lots consisting of privately and publicly-owned parcels made up of
          some{' '}
          <a
            href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section01/'
            target='_blank'
            el='noopener noreferrer'>
            800,000 buildings
          </a>
          . Addresses are{' '}
          <a
            href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            not necessarily enough
          </a>{' '}
          to identify unique buildings as some have more than one address, no address or shared addresses. The BBL
          number is{' '}
          <a href='https://portal.311.nyc.gov/article/?kanumber=KA-01247' target='_blank' rel='noopener noreferrer'>
            used when
          </a>{' '}
          paying property taxes and on NYC Department of Finance and tax forms.
        </p>
        <p>The TCIE dataset contains just under 29,300 unique BBLs and appears, partially, as follows:</p>
      </section>
      <TableTCIE />
      <section>
        <span className='vis-caption' style={{ textAlign: 'left' }}>
          The dataset will be made public in 2022.{' '}
          <a href='mailto:barbara.gray@journalism.cuny.edu'>Contact Barbara Gray</a> for more details.
        </span>
        <p>
          While the dataset does not contain every city landlord's income and expenses – only the ones who challenged
          the city’s tax assessment of their property – the large number of those who did appeal their tax bill amounts
          to a sizable sample of tens of thousands of properties per year. Through these filings we can observe, for
          example, changes over time for buildings that appear in multiple years of filings. We can also note outliers
          such as unusual levels of income increases or decreases. Further, we can obtain a historical snapshot of how a
          landlord's rent-stabilized income versus their market-rate income has changed. An increase in the latter could
          suggest that they flipped rent-stabilized units to market-rate, and in the process displaced tenants (Gray
          2021).
        </p>

        <h5 className='subsubhead'>Joining Other Datasets</h5>
        <p>
          As Gray has been working with housing organizations and advocates on the Landlords Project, the dataset has
          been joined with publicly available data, including those of capitalization rates and sale years for each
          building. These will be explained further on in the paper. Similarly, housing justice organizations such as
          JustFix.nyc use open data in tools they created to serve tenants and advocates. The nonprofit created the{' '}
          <a href='https://whoownswhat.justfix.nyc/' target='_blank' rel='noopener noreferrer'>
            Who Owns What
          </a>{' '}
          database to let users map their landlord's portfolio, a difficult task on its own given efforts by owners to
          mask their identities. Similar work in bringing together open datasets such as on{' '}
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
          </a>
          , and{' '}
          <a
            href='https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4'
            target='_blank'
            rel='noopener noreferrer'>
            evictions
          </a>{' '}
          in a central searchable location, and incorporating maps and other visuals, have also been done by other
          housing groups and government agencies. These sources provide a comprehensive view for tenants and advocates
          to see whether their building or neighborhood, or other places of interest, possess signs of speculation.
          <br />
          <button style={{ marginTop: '2rem' }} className='button'>
            <a href='https://airtable.com/shrgUn4Gw76RzAFDU' target='_blank' className='button--link'>
              Browse Housing Databases
            </a>
          </button>
        </p>
        <p>
          With this in mind and working at a much smaller scale, I combined the TCIE data with the NYC Department of
          City Planning's{' '}
          <a
            href='https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page'
            target='_blank'
            rel='noopener noreferrer'>
            Primary Land Use Tax Output (PLUTO) dataset
          </a>
          . As the majority of the BBLs in the TCIE set were included in the PLUTO list (27,699 out of 29,298), this
          meant the addition of addresses, neighborhoods, boroughs and owners, and other building characteristics, as of
          2021. The visualizations in this project are based on the joined TCIE-Pluto dataset.
        </p>
      </section>
    </div>
  )
}
