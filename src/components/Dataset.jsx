import React from "react"
import TCIETable from './TCIETable'
import StackedBars from './StackedBars'
import './../index.css'

export default function Dataset() {
    return (
        <div>
            <section>
                <h4 className="text subhead">The Dataset</h4>
                <p>
                    Barbara Gray, the chief librarian at the Craig Newmark Graduate School of Journalism at CUNY, generously gave me access to the dataset, which she obtained after submitting a FOIL request of Tax Commission Income and Expense filings. This information on what city landlords make and spend, a part of her ongoing Landlords Project, can work in conjunction with other datasets to reveal the complexities and trends of the persisting housing crisis in New York and its impact on housing equity.
                </p>
                <p>
                    The city requires owners of buildings with 10 or more income-generating units that amount to more than $40,000, to file <a href='https://www1.nyc.gov/assets/finance/downloads/pdf/rpie/rpiefilinginfo.pdf' target='_blank'>Real Property Income and Expense</a> forms with the Department of Finance on a yearly basis for the agency to assess property values. While these forms are considered private and exempt from FOIL requests, it is when the landlord appeals their tax bill, and files a <a href='https://www1.nyc.gov/assets/taxcommission/downloads/pdf/tc201.pdf' target='_blank'>Tax Commission Income and Expense form</a>, that the data can be FOILed. The dataset, which came from the NYC Department of Taxation and Finance and spans from 2005 through 2020 (the respective incomes and expenses are of the previous year), with 2008, 2013 and 2017 filings yet to be received.
                </p>
                <p>
                    Each filing is associated with a BBL, a <a href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/' target='_blank'>number unique to individual city tax lots and buildings</a> that identifies that entity's location using three numerically-coded components: borough (1 digit) + block (5 digits that can include leading zeros) + lot (4 digits that can include leading zeros).
                </p>
                <div className='highlight-box' style={{ width: '80%', margin: '0 auto' }}>
                    BBL <b><span style={{ color: '#8843F2' }}>1</span><span style={{ color: '#EF2F88' }}>00247</span><span style={{ color: '#F47340' }}>0001</span></b>, located at 265 Cherry Street in Chinatown, can be split into:
                    <br />
                    <ul>
                        <li><span style={{ color: '#8843F2', fontWeight: 'bold' }}>1</span> (borough of Manhattan)</li>
                        <li><span style={{ color: '#EF2F88', fontWeight: 'bold' }}>00247</span> (block)</li>
                        <li><span style={{ color: '#F47340', fontWeight: 'bold' }}>0001</span> (lot)</li>
                    </ul>
                </div><br />
                <p>
                    NYC has approximately a million tax lots that includes privately and publicly-owned parcels made up of some 800,000 buildings. Addresses are <a href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/' target='_blank'>not necessarily enough to identify</a> unique buildings as some have more than one address, no address or shared addresses. The BBL<a href='https://portal.311.nyc.gov/article/?kanumber=KA-01247' target='_blank'>number is used</a> when paying property taxes and on NYC Department of Finance and tax forms (“Geosupport System: User Programming Guide,” n.d.).
                </p>
                <p>
                    The TCIE dataset contains 29,298 unique BBLs and appears as follows:
                </p>
            </section>
                <TCIETable />
            <section>
                <p className='vis-caption' style={{ textAlign: 'left' }}>
                    The dataset will be made public in 2022. <a href='mailto:barbara.gray@journalism.cuny.edu'>Contact Barbara Gray</a> for more details.
                </p>
                <p>
                    While the dataset does not contain every city landlord's income and expenses, the large number of those who challenge their tax bill amounts to a sizable sample of tens of thousands of properties per year. Given these individual filings, in cases where a building appears in multiple years, we can observe changes over time; and outliers, for example, in abnormal levels of income increases or decreases, possibly suggesting profit-driven motives. With this sizable number of data points, we also have a historical snapshot of how a landlord's rent-stabilized income versus their market-rate income has changed. An increase in the latter would imply that they flipped rent-stabilized units to market-rate, and in the process displaced tenants in pursuit of maximizing assets.
                </p>

                <h5 className="subsubhead">Joining Other Datasets</h5>
                <p>
                    The TCIE data can also be combined with the many publicly available NYC housing datasets for further constructive analyses. The housing justice organization JustFix.nyc has a <a href='https://whoownswhat.justfix.nyc/' target='_blank'>Who Owns What</a> database tool to "rebalance the power dynamic between landlords and tenants" and let users map their landlord's portfolio. The tool <a href='https://whoownswhat.justfix.nyc/en/how-it-works' target='_blank'>pulls from numerous housing-related open data</a> from city agencies and advocacy organizations. Such efforts in gathering various datasets such as on <a href='https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5/data' target='_blank'>housing maintenance code violations</a>, <a href='https://data.cityofnewyork.us/Housing-Development/Housing-Litigations/59kj-x8nc/data' target='_blank'>housing litigations</a>, and <a href='https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4' target='_blank'>evictions</a> in a central searchable location and including maps and other visuals have been done by other housing groups and government agencies as well. These sources provide a comprehensive view for tenants and advocates to see whether their building or neighborhood, or others of interest, possess signs of speculation or distress.  
                    <p />
                    <button className='button'><a href='https://airtable.com/shrgUn4Gw76RzAFDU' target='_blank' className='button--link'>Browse Housing Databases</a></button>
                </p>

                <h5 className="subsubhead">An Initial Chart</h5>
                <p>
                    Working at a far smaller scale, I combined the TCIE data with the NYC Department of City Planning's <a href='https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page' target='_blank'>Primary Land Use Tax Output</a> (PLUTO) dataset. With the majority of the BBLs in the TCIE set included in the PLUTO list (27,699 out of 29,298), I could add information on addresses, approximate neighborhoods, boroughs and ownership, as of 2021. All visualizations below are based on the joined TCIE-Pluto dataset. 
                </p>
                <p>
                    I am approaching the project from the angle of "visualizing for analysis," as <a href='https://flowingdata.com/2021/10/21/process-162-aspects/' target='_blank'>Nathan Yau describes in Flowing Data</a>. As opposed "visualizing for communication" with a target audience in mind, in the case of visualizing for yourself:</p>
                <p>
                    <blockquote>...you’re still looking for something interesting. You haven’t found it yet, so you visualize the data itself. You start with generic and default charts and work your way towards more specific visual and unique forms.</blockquote>
                </p>
                <p>
                    Following these parameters, the visuals below are made with the perspective of someone using the data to look for stories – perhaps one that starts with a neighborhood or a building, followed by the experiences of the residents there, before and during the pandemic – whether that be a journalist, an analyst, or an advocate, intent on avoiding generalizations or erasing the nuances and disparities of the people and families that can easily get overlooked in aggregated data. Perhaps this series of visualizations can evoke "question framing," a term used by Jer Thorp in his book "Living in Data," to describe how a visualization rather than simplifying, reveals complexities, "exposing things that weren't before able to be seen" (Thorp 2021, 15). Here, with each successive visualization, more questions and more potential directions can emerge in search of the stories within.
                </p>
                <p>
                    But first, to get an idea of the shape of the data, I started with a "generic" bar chart to see the number of TCIE filings categorized by year and borough. 
                </p>
                <StackedBars />
                <p>The chart provides an overall view that shows:</p>
                <ul>
                    <li>Filings number in the thousands each year</li>
                    <li>Many of the filings (nearly 45%) are of buildings in Manhattan</li>
                    <li>Increase in filings in more recent years</li>
                </ul><br />
                <p>
                    While there are plenty of reasons to visualize aggregated data, for the purposes of this capstone and with the intent of finding individual stories, we can try to go a bit deeper.
                </p>

            </section>
        </div>
    )
}