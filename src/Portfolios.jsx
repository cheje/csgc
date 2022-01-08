import React from "react"
import './index.css'

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
                    the potential future rents it might command if some action were taken, such as evicting long-term tenants, renovating neglected or unstylish properties, or demolishing and reconstructing buildings (Stein 58).
                </blockquote>
                <p>
                    To the players involved – landlords, investors, lenders – "declining investment" in a building represents an opportunity for reinvestment and gentrification (134). At the expense of residents. As is happening during the pandemic – and other periods – when some landlords cannot keep up with mortgage payments, their building faces financial distress, meaning they risk being foreclosed and plummeting value (Hornbach et al. 2020 5). Indicators of distress include lawsuits, code violations, tenant complaints and deferred or disruptive maintenance, the end goal being tenant turnover through disrepair and displacement (Gray 2021). <a href='https://www.forbes.com/sites/forbesbusinesscouncil/2021/04/05/the-dos-and-donts-of-investing-in-distressed-properties/?sh=4d9708f6628f' target='_blank'>Distressed buildings on the verge of foreclosure</a> or already in the hands of a bank or lender attract investors because of their lower market rates. They see it as a chance to buy at a discounted price and will readily do so, given the cyclical nature of the real estate market and consequently the belief that property values undulate and will go up again at some point (Hornbach et al. 2020 5).
                </p>
                <p className='highlight-box'>
                    The CREATE Initiative, a project that studies envrionment and equity, released its "<a href='https://create.umn.edu/toolkit/' target='_blank'>Sharing in the Benefits of a Greening City</a>" toolkit, in which the researchers cover key housing concepts such as real estate speculation. It notes that such activity occurs "where significant changes in value are anticipated" such as large-scale investments in green infrastructure development (Klein et al. 20). Investors might go after properties in or around those areas years before project completion and in the process, displacing long-time residents, increasing rent and property values; and "in doing so, speculative practices restrict who is able to access and enjoy the fruits of these investments."
                </p><br />
                <p>
                    Given that landlords who have amassed a considerable number of properties can tend toward speculative behavior, I proceeded with a bubble chart of landlords with at least 10 properties found in the original TCIE data. Of course, buildings have changed hands over the past nearly two decades but at least from this collection of more than 25,000 properties, the visualization, color-coded by the borough(s) in which the landlord's buildings are found, gives an idea of the comparatively larger portfolios even in this sample of properties out of the more than 850,000 in the original PLUTO dataset.
                </p>
                <p>
                    As above, this chart would also be meant for the eyes of someone looking for trends and individual areas and properties of interest, intended to give them an idea, not comprehensive insight, into ownership among the TCIE dataset. Though it is also visualizing aggregated data, in this case it can lead one in the direction of, say, specific landlords.
                </p>
            </section>
        </div>
    )
}