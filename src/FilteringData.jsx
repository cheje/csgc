import React from "react"
import './index.css'

export default function FilteringData() {
    return (
        //<div style={{ boxShadow: `5px 8px 20px rgba(0, 0, 0, 0.2)` }}>
        <div>
            <section>
                <h4 className="subhead">Filtering the Data</h4>
                <p>
                    For the Landlords Project, <a href='https://www.linkedin.com/in/kate-a-ham' target='_blank'>Kate Ham</a>, a housing justice advocate pursuing a master of city planning degree, added capitalization rate and sale year variables, among others, to the TCIE dataset, which they pulled from public records. Income and expenses before, after and within the year of the building sale can also help us see if speculation is occurring. For example, were there any unusually high expenses right before a sale? 
                </p>
                <p>
                    Kate added sale years for properties in the TCIE data that had income and expense numbers available within a year of their sale. In other words, a TCIE form was filed in the year before, after or within the sale. The most accurate cap rates would be in the year a building was sold, that is, when that sale year is before, after or within a year of the TCIE filing. This generated cap rates for several thousand different properties. The lower the cap rate, the greater the level of risk going into a purchase and the greater the likelihood of speculation and distress (Gray 2021). 
                </p>
                <p>
                    The NYC Department of Housing Preservation and Development analyzes cap rates when populating its <a href='https://data.cityofnewyork.us/Housing-Development/Speculation-Watch-List/adax-9mit' target='_blank'>Speculation Watch List</a> of mostly rent-regulated multiple dweeling units. HPD compares a property's cap rate, which it <a href='https://www1.nyc.gov/site/hpd/about/speculation-watch-list.page' target='_blank'>describes</a> as the building's "net operating income divided by its sales price" to the median cap rate of similar properties purchased in the same borough. Those with cap rates below the median value of the borough make the list. In their "<a href='https://www1.nyc.gov/assets/hpd/downloads/pdfs/services//speculation-watch-list-adopted-rules.pdf' target='_blank'>Statement of Basis and Purpose</a>" for the speculation watch list, HPD states: <br /><br />
                    <blockquote>"Such below average Capitalization Rates suggest purchase prices exceeding the value of these properties, which is based upon their net operating income. When a purchaser is willing to pay more than the property value, it indicates a greater potential for tenant harassment so that the purchaser can recoup its inflated purchase price through forcing tenants out in order to escalate rents."</blockquote>
                </p>
                <p>
                    In its explanation on cap rates, the <a href='https://homevestorsfranchise.com/blog/northeast/2021/04/understanding-cap-rates-in-nyc-the-basics-you-need-to-know/' target='_blank'>HomeVestors Franchise</a> notes that the net operating income (NOI) in the equation is that of "after expenses"; the NOI is divided by the "current market value" and not what the landlord had paid for the building as "any renovations or improvements you do will affect the market value and, subsequently, the cap rate" (HomeVestors 2021). 
                </p>
                <p>
                    Given how expenses factor into determining cap rates, we can use the two variables to transition from visualizations of aggregated data to those of actual data points and outliers, and start moving in the direction of finding potential buildings, and thus stories, of interest.
                </p>
                
            </section>
        </div>
    )
}