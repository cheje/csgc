import React from "react"
import './../index.css'
import Bubbles from './Bubbles'

export default function Portfolios() {
    return (
        <div>
            <section>
                <h4 className="subhead">Portfolios</h4>
                <p>
                    The proceeding visualizations will touch on real estate speculation.
                </p>
                <p>
                    In "Capital City: Gentrification and the Real Estate State," Samuel Stein explains that in determining where to invest, speculators look for a gap between the rents in the location and:
                </p>
                <blockquote>
                    the potential future rents it might command if some action were taken, such as evicting long-term tenants, renovating neglected or unstylish properties, or demolishing and reconstructing buildings. (Stein 2019, 58)
                </blockquote>
                <br /><p>
                    To the landlords, investors, lenders involved, "declining investment" in a building represents an opportunity for reinvestment and gentrification (134). At the expense of residents. As is happening during the pandemic, and other periods, when some landlords cannot keep up with mortgage payments, their building faces financial distress, meaning they risk being foreclosed and plummet in value (Hornbach et al. 2020 5). Indicators of distress include lawsuits, code violations, tenant complaints and deferred or disruptive maintenance (Gray 2021). <a href='https://www.forbes.com/sites/forbesbusinesscouncil/2021/04/05/the-dos-and-donts-of-investing-in-distressed-properties/?sh=4d9708f6628f' target='_blank'>Distressed buildings on the verge of foreclosure</a> or already in the hands of a bank or lender still attract investors who see the lower market rates as a chance to buy at a discounted price. They will readily do so, given the cyclical nature of the real estate market and consequently the belief that property values undulate and will go up again at some point (Hornbach et al. 2020 5).
                </p>
                <p className='highlight-box'>
                    Released by the CREATE Initiative, a project that studies envrionment and equity, the "<a href='https://create.umn.edu/toolkit/' target='_blank'>Sharing in the Benefits of a Greening City</a>" toolkit covers key housing concepts including speculation. The report notes that such activity occurs "where significant changes in value are anticipated" such as large-scale investments in green infrastructure development. Investors might go after properties in or around those areas years before project completion and in the process, displace long-time residents and increase rent and property values; and "in doing so, speculative practices restrict who is able to access and enjoy the fruits of these investments" (Klein et al. 20).
                </p><br />
                <p>
                    Another indicator of speculation is a property owner amassing a considerable number of properties in one's portfolio. I proceeded with a bubble chart of landlords with at least 10 properties found in the original TCIE data. Buildings have changed hands over the past nearly two decades but at least from this collection of more than 25,000 properties, the visualization, color-coded by the borough(s) in which the landlord's buildings are found, gives an idea of the comparatively larger portfolios in this sample of buildings. While this is also a chart of aggregated data, in this case, it can lead one in the direction of, say, specific landlords for further analysis.
                </p>
                <Bubbles />
                <br /><p>
                    For some wider context, in "<a href='https://medium.com/justfixnyc/examining-the-myth-of-the-mom-and-pop-landlord-6f9f252a09c' target='_blank'>Examining the Myth of the 'Mom-and-Pop' Landlord</a>," Sam Rabiyah, the data lead and engineer at <a href='https://www.justfix.nyc/' target='_blank'>JustFix.nyc</a>, details findings of the group's analysis of city landlords who owned rent-regulated housing properties. They used their aforementioned Who Owns What database. "Larger landlords," or those with a sizable portfolio of more than 20 buildings, own about half of the city's rent-regulated properties. Also of note, larger landlords conducted "more than half of all executed evictions in 2018" (Rabiyah 2020). 
                </p>
            </section>
        </div>
    )
}