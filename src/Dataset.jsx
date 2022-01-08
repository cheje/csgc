import React from "react"
import StackedBars from './StackedBars'
import './index.css'

export default function Dataset() {
    return (
        <div>
            <section>
                <h4 className="text subhead">The Dataset</h4>
                <p>
                    The dataset comes from Barbara Gray, the chief librarian at the Craig Newmark Graduate School of Journalism at CUNY, who submitted a FOIL request as part of her ongoing Landlords Project. This information on the income and expenses of city landlords, in conjunction with other datasets, can reveal the complexities and trends of the persisting housing crisis in New York and its impact on housing equity. The data originates from the NYC Department of Taxation and Finance and contains what landlords make and spend. The city requires owners of buildings with 10 or more income-generating units that amount to more than $40,000, to file <a href='https://www1.nyc.gov/site/finance/taxes/property-rpie.page' target='_blank'>income and expense statements</a> with the Department of Finance on a yearly basis. While these forms are considered private and exempt from FOIL request, it is when the landlord appeals their tax bill, and files a Tax Commission Income and Expense form, that the data can be FOILed. The dataset spans from 2005 through 2020 (the respective incomes and expenses are of the previous year), with 2008, 2013 and 2017 filings still to be received.
                </p>
                <p>
                    Each filing is identified by a BBL, a <a href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/' target='_blank'>number unique to individual city tax lots and buildings</a> that identifies its location through three numerically-coded components: borough (1 digit) + block (5 digits that can include leading zeros) + lot (4 digits that can include leading zeros).
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
                    NYC has approximately a million tax lots that included privately and publicly-owned parcels made up of some 800,000 buildings. Addresses are <a href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/' target='_blank'>not necessarily enough to identify</a> unique buildings as some have more than one address, no address or shared addresses. The <a href='https://portal.311.nyc.gov/article/?kanumber=KA-01247' target='_blank'>number is used</a> when paying property taxes and on NYC Department of Finance and tax forms.
                </p>
                <p>
                    The TCIE dataset contains 29,298 unique BBLs.
                </p>
                <p>
                    This set of filings over time tells us how these variables, in association with individual buildings, changed over time. While the dataset does not contain every landlord's income and expenses, the large number of those who challenge their tax bill amounts a good sample of tens of thousands per year. Given these individual filings, in cases where a building appears in multiple years, we can observe outliers in terms of, for example, income increases that might suggest profit-driven tendencies. And with this sizable number of data points, we also have a historical snapshot of how a landlord's rent-stabilized income versus their market-rate income has changed. An increase in the latter would imply that they flipped rent-stabilized units to market-rate, and in the process displace tenants in pursuit of maximizing assets.
                </p>
                <p>
                    The TCIE dataset will be made public in 2022. <a href='mailto:barbara.gray@journalism.cuny.edu'>Contact Barbara Gray</a> if interested in more information.
                </p>
                <h5 className="subsubhead">Pulling in Other Datasets</h5>
                <p>
                    In "<a href='https://medium.com/justfixnyc/examining-the-myth-of-the-mom-and-pop-landlord-6f9f252a09c' target='_blank'>Examining the Myth of the 'Mom-and-Pop' Landlord</a>," Sam Rabiyah, the data lead and engineer at the housing justice organization <a href='https://www.justfix.nyc/' target='_blank'>JustFix.nyc</a>, details key findings of the group's analysis of city landlords who owned rent-regulated housing properties. "Larger landlords," or those with a sizable portfolio of more than 20 buildings, own about half of the city's rent-regulated properties.
                    Also of note, larger landlords conducted "more than half of all executed evictions in 2018." 
                </p>
                <p>
                    To conduct their study, JustFix.nyc used its <a href='https://whoownswhat.justfix.nyc/' target='_blank'>Who Owns What</a> database tool to "rebalance the power dynamic between landlords and tenants" and let users map the expanse of their landlord's portfolio using an algorithm based on the NYC Department of Housing Preservation and Development's registration data for residential properties. The database also <a href='https://whoownswhat.justfix.nyc/en/how-it-works' target='_blank'>pulls from numerous publicly available housing-related data</a> from the city agencies and advocacy organizations. Such projects of gathering these various datasets such as housing violations, 311 maintenance complaints, evictions, among others, in a central searchable location and including maps and other visuals have also been done by other housing groups and government agencies. These sources provide a comprehensive view for tenants and advocates see whether their residential building or neighborhood, or others of interest, possess troubling signs. Joining different datasets together also shows the multitude of potential indicators of speculation, with many of that data being publicly available. I gathered some of these databases in a spreadsheet that I included in the digital component of my capstone. 
                    <p />
                    <button className='button'><a href='https://airtable.com/shrgUn4Gw76RzAFDU' target='_blank' className='button--link'>Browse Housing Databases</a></button>
                </p>
                <p>
                    For this project, I worked at a smaller scale and combined the TCIE data with the NYC Department of City Planning's <a href='https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page' target='_blank'>Primary Land Use Tax Output</a> (PLUTO) dataset. With the majority of the BBLs in the TCIE set included in the PLUTO list (27,699 out of 29,298), I could add information on addresses, approximate neighborhoods, boroughs and ownership, as of 2021. All visualizations below are based on the joined TCIE-Pluto dataset. 
                </p>
                <p>
                    Concerned about attempting to communicate the complexities of these issues through visualizations within the timeframe of the capstone, I decided to approach the project from the angle of "visualizing for analysis," as <a href='https://flowingdata.com/2021/10/21/process-162-aspects/' target='_blank'>Nathan Yau describes in Flowing Data</a>. Unlike "visualizing for communication" with a target audience in mind, in the case of visualizing for yourself:</p>
                <p>
                    <blockquote>...you’re still looking for something interesting. You haven’t found it yet, so you visualize the data itself. You start with generic and default charts and work your way towards more specific visual and unique forms.</blockquote>
                </p>
                <p>
                    Following this scope, the visuals below are made with the perspective in mind of someone using the data for stories – perhaps one that starts with a neighborhood or a building, followed by the experiences of the residents there, before and during the pandemic – whether that be a journalist, an analyst, or an advocate intent on avoiding generalizations or erasing the nuances and disparities of the people and families that can easily get overlooked in aggregated data. Perhaps this series of visualizations can involve what Jer Thorp, in his book "Living in Data," calls "question framing" where a visualization rather than simplify, reveals complexities, "exposing things that weren't before able to be seen" (Thorp 15). That with each successive visualization, more questions and more potential directions emerge.
                </p>
                <p>
                    But first, to get an idea of the shape of the data, I started with a "generic" bar chart to see the number of TCIE filings categorized by year and borough. 
                </p>
                <StackedBars />
                <p>The chart provides an overall view that shows:</p>
                <ul>
                    <li>Filings number in the thousands each year</li>
                    <li>Most of the filings (nearly 45%) are of buildings in Manhattan</li>
                    <li>Increase in filings in more recent years</li>
                </ul><br />
                <p>
                    While there are plenty of reasons to visualize aggregated data, for the purposes of this capstone and the intent of finding individual stories, we can try to go a bit deeper.
                </p>

            </section>
        </div>
    )
}