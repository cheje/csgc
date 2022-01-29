import React from 'react'
import './../app.css'

export default function FilteringData() {
  return (
    <div>
      <h5 className='subsubhead'>Filtering the Data</h5>
      When some owners, especially larger landlords, buy up buildings, capitalization rates or cap rates represent a
      qualitative indicator of potential speculation. Returning to the variable, which was mentioned in the
      introduction, a cap rate of around 3 or below at the time of a building purchase, considered a low number, hints
      at speculation. The sale year variable, which along with the cap rate, has also been joined with the original TCIE
      data, is included because cap rates close to the year of purchase – specifically either one year before or after
      the sale, or the same year of the sale – give the most accurate rates. These two variables have been added to only
      buildings in the TCIE data where a filing exists within a year of the building’s sale year, which amounts to
      several thousand buildings. Noting expense and income values in the years near that of the building sale can also
      help to see if speculation is occurring. Were there any unusually high operating expenses made right before a
      sale? If there exists a significant difference in expenses between years, was that because of a renovation and
      eventual sale? In the real estate cycle, speculation and a landlord’s desire to maximize the value of assets,
      leads to building neglect and suffering or forced out tenants (Hornbach et al. 2020, 4).
      <p>
        The NYC Department of Housing Preservation and Development analyzes cap rates when populating its{' '}
        <a href='https://data.cityofnewyork.us/Housing-Development/Speculation-Watch-List/adax-9mit' target='_blank'>
          Speculation Watch List
        </a>
        . HPD compares a property's cap rate, which it{' '}
        <a href='https://www1.nyc.gov/site/hpd/about/speculation-watch-list.page' target='_blank'>
          describes
        </a>{' '}
        as the building's "net operating income divided by its sales price," to the median cap rate of similar
        properties purchased in the same borough. Those with cap rates below the median value of the borough make the
        list. In their "
        <a
          href='https://www1.nyc.gov/assets/hpd/downloads/pdfs/services//speculation-watch-list-adopted-rules.pdf'
          target='_blank'
          rel='noopener noreferrer'>
          Statement of Basis and Purpose
        </a>
        " for the speculation watch list, HPD explains why a lower cap rate is cause for concern:
      </p>
      <p>
        <blockquote>
          Such below average Capitalization Rates suggest purchase prices exceeding the value of these properties, which
          is based upon their net operating income. When a purchaser is willing to pay more than the property value, it
          indicates a greater potential for tenant harassment so that the purchaser can recoup its inflated purchase
          price through forcing tenants out in order to escalate rents.
        </blockquote>
      </p>
      <p>
        In its explanation on cap rates, the{' '}
        <a
          href='https://homevestorsfranchise.com/blog/northeast/2021/04/understanding-cap-rates-in-nyc-the-basics-you-need-to-know/'
          target='_blank'
          rel='noopener noreferrer'>
          HomeVestors Franchise
        </a>{' '}
        notes that the net operating income (NOI) in the equation is that of "after expenses." The NOI is divided by the
        "current market value" and not what the landlord had paid for the building since "any renovations or
        improvements you do will affect the market value and, subsequently, the cap rate." Given how expenses can factor
        into determining cap rates, I used those two variables to transition from visualizations of aggregated data to
        those of specific data points, starting with the maps below.
      </p>
    </div>
  )
}
