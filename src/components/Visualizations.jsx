import React from "react"
import './../index.css'
import StackedBars from './StackedBars'
import Bubbles from './Bubbles'
import FilteringData from './FilteringData'
import Scrollytelling from './Scrollytelling'
import Shiny from './Shiny'

export default function Visualizations() {
    return (
        <div>
            <section>
                <h4 className="subhead">Visualizations</h4>
                <p>
                    I am approaching the project from the angle of "visualizing for analysis," as <a href='https://flowingdata.com/2021/10/21/process-162-aspects/' target='_blank' rel='noopener noreferrer'>Nathan Yau describes in Flowing Data</a>. As opposed to "visualizing for communication" with a target audience in mind, in the case of visualizing for yourself:
                </p>
                <p>
                    <blockquote>
                        ...you’re still looking for something interesting. You haven’t found it yet, so you visualize the data itself. You start with generic and default charts and work your way towards more specific visual and unique forms.
                    </blockquote>
                </p>
                <p>
                    Following these parameters, the visualizations are made through the perspective of someone using the data to look for stories of tenants, whether that be a journalist, an analyst, or an advocate – anyone intent on avoiding generalizations or erasing the nuances and disparities of the people and families that can easily get overlooked in aggregated data. Perhaps these visualizations can evoke "question framing," the term used by <a href='https://www.jerthorp.com/' target='_blank' rel='noopener noreferrer'>Jer Thorp</a> in his book "Living in Data" to describe how a visualization, rather than simplifying, reveals complexities, "exposing things that weren't before able to be seen." Here, with each successive visualization, more questions and more potential directions can emerge in search of the stories within.
                </p>
                <p>
                    But first, to get an idea of the shape of the data, I started with a "generic" bar chart to see the number of TCIE filings categorized by year and borough.
                </p>
                <StackedBars />
                <p>This overall view shows:</p>
                <ul>
                    <li>Filings number in the thousands each year</li>
                    <li>Many of the filings (nearly 45%) are of buildings in Manhattan</li>
                    <li>An increase in filings in more recent years</li>
                </ul><br />
                <p>
                    While there are plenty of reasons to visualize aggregated data, for the purposes of this capstone and with the intent of finding individual stories, we can try to go a bit deeper.
                </p>
                <h5 className="subsubhead">Portfolios</h5>
                <p>
                    The proceeding visualizations will touch on real estate speculation.
                </p>
                <p>
                    In "Capital City: Gentrification and the Real Estate State," <a href='https://www.gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Doctoral-Programs/Earth-and-Environmental-Sciences/Student-Bios/Samuel-Stein' target='_blank' rel='noopener noreferrer'>Samuel Stein</a> explains that in determining where to invest, speculators look for a gap between the rents in the location and:
                </p>
                <p>
                <blockquote>
                    ...the potential future rents it might command if some action were taken, such as evicting long-term tenants, renovating neglected or unstylish properties, or demolishing and reconstructing buildings.
                </blockquote>
                </p>
                <p>
                    In the cases of "declining investment" in a building, landlords, investors, lenders might consider this an opportunity for reinvestment and gentrification (134). As is happening during the pandemic, and other periods, when some landlords cannot keep up with mortgage payments, their building plummets in value and ends up facing financial distress and risk being foreclosed (Hornbach et al. 2020, 5). Indicators of distress include lawsuits, code violations, tenant complaints and deferred or disruptive maintenance. <a href='https://www.forbes.com/sites/forbesbusinesscouncil/2021/04/05/the-dos-and-donts-of-investing-in-distressed-properties/' target='_blank' rel='noopener noreferrer'>Distressed buildings on the verge of foreclosure</a> or already in the hands of a bank or lender still attract investors who see the lower market rates as a chance to buy at a discounted price (Byrne 2021). They will readily do so, given the cyclical nature of the real estate market and consequently the belief that property values undulate and will go up again at some point (Hornbach et al. 2020, 5).
                </p>
                <p className='highlight-box'>
                    Released by the CREATE Initiative – a project that studies envrionment and equity – the "<a href='https://create.umn.edu/toolkit/' target='_blank'>Sharing in the Benefits of a Greening City</a>" toolkit covers key housing concepts including speculation. The report notes that such activity occurs "where significant changes in value are anticipated" such as large-scale investments in green infrastructure development. Investors might go after properties in or around those areas years before project completion and in the process, displace long-time residents and increase rent and property values; and "in doing so, speculative practices restrict who is able to access and enjoy the fruits of these investments" (Klein et al. 20).
                </p><br />
                <p>
                    That being said, another indicator of speculation is a property owner amassing a considerable number of properties in one's portfolio. I proceeded with a bubble chart of landlords with at least 10 properties found in the original TCIE data. Buildings have changed hands over the past nearly two decades but at least from this collection of more than 25,000 properties, the visualization, color-coded by the borough(s) in which the landlord's buildings are found, gives an idea of the comparatively larger portfolios present in this sample of buildings. While this is also a chart of aggregated data, in this case, it can lead one in the direction of, say, individual landlords for further analysis. Note that with building owner efforts to obscure their identities and inputted names spelled or formatted differently, the numbers in the chart from being fully precise.
                </p>
                <Bubbles />
                <br /><p>
                    For some broader context, in "<a href='https://medium.com/justfixnyc/examining-the-myth-of-the-mom-and-pop-landlord-6f9f252a09c' target='_blank'>Examining the Myth of the 'Mom-and-Pop' Landlord</a>," Sam Rabiyah, the data lead and engineer at <a href='https://www.justfix.nyc/' target='_blank'>JustFix.nyc</a>, details findings of the group's analysis of city landlords who owned rent-regulated housing properties; they used the Who Owns What database. "Larger landlords," or those with a sizable portfolio of more than 20 buildings, own about half of the city's rent-regulated properties. Also of note, larger landlords conducted "more than half of all executed evictions in 2018." 
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