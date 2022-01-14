import React from "react"
import TCIETable from './TCIETable'
import './../index.css'

export default function Dataset() {
    return (
        <div>
            <section>
                <h4 className="text subhead">The Dataset</h4>
                <p>
                    The dataset comes from Barbara Gray, the chief librarian and associate professor at the Craig Newmark Graduate School of Journalism at CUNY, who obtained the information after submitting a FOIL request of Tax Commission Income and Expense filings for her ongoing Landlords Project. The project aims to reveal the complexities and trends of the persisting housing crisis in New York and its impact on housing equity. New York City requires owners of buildings with 10 or more income-generating units that amount to more than $40,000, to file <a href='https://www1.nyc.gov/assets/finance/downloads/pdf/rpie/rpiefilinginfo.pdf' target='_blank' rel='noopener noreferrer'>Real Property Income and Expense</a> forms every year with the Department of Finance in order for the agency to assess property values. The content of these forms are considered private and exempt from FOIL requests but when the landlord appeals their tax bill, and files a <a href='https://www1.nyc.gov/assets/taxcommission/downloads/pdf/tc201.pdf' target='_blank' rel='noopener noreferrer'>Tax Commission Income and Expense</a> form, that data can be requested. Barbara received the dataset from the NYC Department of Taxation and Finance and it spans from 2005 through 2020 (the respective incomes and expenses are of the previous year), with 2008, 2013 and 2017 filings yet to be provided. The dataset will be made public in 2022.
                </p>
                <p>
                    The city requires owners of buildings with 10 or more income-generating units that amount to more than $40,000, to file <a href='https://www1.nyc.gov/assets/finance/downloads/pdf/rpie/rpiefilinginfo.pdf' target='_blank'>Real Property Income and Expense</a> forms with the Department of Finance on a yearly basis for the agency to assess property values. While these forms are considered private and exempt from FOIL requests, it is when the landlord appeals their tax bill, and files a <a href='https://www1.nyc.gov/assets/taxcommission/downloads/pdf/tc201.pdf' target='_blank'>Tax Commission Income and Expense form</a>, that the data can be FOILed. The dataset, which came from the NYC Department of Taxation and Finance and spans from 2005 through 2020 (the respective incomes and expenses are of the previous year), with 2008, 2013 and 2017 filings yet to be received.
                </p>
                <p>
                    Each filing is associated with a BBL, a <a href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/' target='_blank' rel='noopener noreferrer'>number unique to individual city tax lots and buildings</a> that identifies that entity's location using three numerically-coded components: <span style={{ color: '#8843F2' }}>borough</span> (1 digit: 1 Manhattan, 2 Bronx, 3 Brooklyn, 4 Queens, 5 Staten Island) + <span style={{ color: '#EF2F88' }}>block</span> (5 digits that can include leading zeros) + <span style={{ color: '#F47340' }}>lot</span> (4 digits that can include leading zeros).
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
                    New York has approximately 1 million tax lots that include privately and publicly-owned parcels made up of some <a href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section01/' target='_blank' el='noopener noreferrer'>800,000 buildings</a>. Addresses are <a href='https://nycplanning.github.io/Geosupport-UPG/chapters/chapterVI/section03/' target='_blank' rel='noopener noreferrer'> not necessarily enough</a> to identify unique buildings as some have more than one address, no address or shared addresses. The BBL number is <a href='https://portal.311.nyc.gov/article/?kanumber=KA-01247' target='_blank' rel='noopener noreferrer'>used when</a> paying property taxes and on NYC Department of Finance and tax forms (“Geosupport System: User Programming Guide,” n.d.).
                </p>
                <p> 
                    The TCIE dataset contains 29,298 unique BBLs and appears, partially, as follows:
                </p>
            </section>
                <TCIETable />
            <section>
                <p className='vis-caption' style={{ textAlign: 'left' }}>
                    The dataset will be made public in 2022. <a href='mailto:barbara.gray@journalism.cuny.edu'>Contact Barbara Gray</a> for more details.
                </p>
                <p>
                    While the dataset does not contain every city landlord's income and expenses – only those who challenged the city’s tax assessment of their property – the large number of those who did appeal their tax bill amounts to a sizable sample of tens of thousands of properties per year. Through these filings we can observe, for example, changes over time for buildings that appear in multiple years. We can also note outliers such as unusual levels of income increases or decreases, suggesting profit-driven motives. Further, we can obtain a historical snapshot of how a landlord's rent-stabilized income versus their market-rate income has changed. An increase in the latter would imply that they flipped rent-stabilized units to market-rate, and in the process displaced tenants in pursuit of maximizing assets.
                </p>

                <h5 className="subsubhead">Joining Other Datasets</h5>
                <p>
                    Combining the TCIE data with publicly available NYC housing datasets provides opportunity for further analysis. As Barbara has been working with housing organizations and advocates on the Landlords Project, the dataset has been joined with open data and public records, including those of cap rates and sale years for each building. These will be explained further on in the paper. Similarly, housing organizations such as JustFix.nyc use open data in tools serving tenants and supporters. The nonprofit created the <a href='https://whoownswhat.justfix.nyc/' target='_blank' rel='noopener noreferrer'>Who Owns What</a> database to let users map their landlord's portfolio, a difficult task on its own given efforts by owners to mask their identities. The tool compares names and addresses in building registration listings to connect property ownership while also pulling in additional housing information from <a href='https://whoownswhat.justfix.nyc/en/how-it-works' target='_blank' rel='noopener noreferrer'>city agencies and other advocacy organizations</a>. Similar efforts in bringing together open datasets such as on <a href='https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5/data' target='_blank' rel='noopener noreferrer'>housing maintenance code violations</a>, <a href='https://data.cityofnewyork.us/Housing-Development/Housing-Litigations/59kj-x8nc/data' target='_blank' rel='noopener noreferrer'>housing litigations</a>, and <a href='https://data.cityofnewyork.us/City-Government/Evictions/6z8x-wfk4' target='_blank' rel='noopener noreferrer'>evictions</a> in a central searchable location, and incorporating maps and other visuals, have also been done by other housing groups and government agencies. These sources provide a comprehensive view for tenants and advocates to see whether their own building or neighborhood, or other places of interest, possess signs of speculation. 
                    <p />
                    <button className='button'><a href='https://airtable.com/shrgUn4Gw76RzAFDU' target='_blank' className='button--link'>Browse Housing Databases</a></button>
                </p>
                <p>
                    With this in mind, while working at a much smaller scale, I combined the TCIE data with the NYC Department of City Planning's <a href='https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page' target='_blank' rel='noopener noreferrer'>Primary Land Use Tax Output (PLUTO) dataset</a>.  As the majority of the BBLs in the TCIE set were included in the PLUTO list (27,699 out of 29,298), I could add addresses, neighborhoods, boroughs and owners, and other building characteristics as of 2021.  The visualizations found below are based on the joined TCIE-Pluto dataset.
                </p>
            </section>
        </div>
    )
}