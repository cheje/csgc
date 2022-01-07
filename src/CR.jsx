import React from "react"
import './index.css'

export default function CR() {
    return (
        //<div style={{ boxShadow: `5px 8px 20px rgba(0, 0, 0, 0.2)` }}>
        <div>
            <section>
                <h5 className="subsubhead">Cap Rates, a Qualitative Indicator</h5>
                <p>
                    For the Landlords Project, <a href='https://www.linkedin.com/in/kate-a-ham' target='_blank'>Kate Ham</a>, housing justice advocate pursuing a UC Berkeley master of city planning degree, added a capitalization rate variable for the TCIE dataset. They noted that in a conversation with Jacob Udell of the <a href='https://unhp.org/' target='_blank'>University Neighborhood Housing Program</a>, he said that the most accurate cap rates should be in the year a building was sold <i>when that year is within a year of the TCIE filing year</i>, whether that be the year before, after or of the year of the filing. This generated cap rates for some 3,500 buildings. The lower the cap rate, namely at the 3.5 and below threshold, the greater the likelihood of speculative behavior. How a cap rate is derived, as noted below, implies that lower rates result from lower incomes (numerator) relative to the market value of a building.
                </p>
                <p>
                    Cap rates can serve as a qualitiative variable in helping to suspect potentially distressed housing. The NYC Department of Housing Preservation and Development analyzes cap rates when populating its <a href='https://data.cityofnewyork.us/Housing-Development/Speculation-Watch-List/adax-9mit' target='_blank'>Speculation Watch List</a>, of mostly rent-regulated multiple dweeling units. HPD compares a property's cap rate, which it <a href='https://www1.nyc.gov/site/hpd/about/speculation-watch-list.page' target='_blank'>describes</a> as the building's "net operating income divided by its sales price" to the median cap rate of similar properties purchased in the same borough. Those with cap rates below the median value of the borough make the list. In their "<a href='https://www1.nyc.gov/assets/hpd/downloads/pdfs/services//speculation-watch-list-adopted-rules.pdf' target='_blank'>Statement of Basis and Purpose</a>" for the speculation watch list, HPD states: <br /><br />
                    <blockquote><i>"Such below average Capitalization Rates suggest purchase prices exceeding the value of these properties, which is based upon their net operating income. When a purchaser is willing to pay more than the property value, it indicates a greater potential for tenant harassment so that the purchaser can recoup its inflated purchase price through forcing tenants out in order to escalate rents."</i></blockquote>
                </p>
                <p>
                In its explanation on the cap rate, the <a href='https://homevestorsfranchise.com/blog/northeast/2021/04/understanding-cap-rates-in-nyc-the-basics-you-need-to-know/' target='_blank'>HomeVestors Franchise</a> notes that the net operating cost in the equation is that of "after expenses"; this NOI is divided by the "current market value" and not what the landlord had paid for the building as "any renovations or improvements you do will affect the market value and, subsequently, the cap rate." 
                </p>
                <p>
                With this understanding of how expenses factor into determining cap rates, we can use the two variables to transition from visualizations of aggregated data to those of actual data points and start digging through potential buildings of interest.
                </p>
                
            </section>
        </div>
    )
}