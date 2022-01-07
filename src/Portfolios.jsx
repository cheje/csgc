import React from "react"
import './index.css'

export default function Portfolios() {
    return (
        <div>
            <section>
                <h4 className="subhead">Pulling in Other Datasets</h4>
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
                    For this project, I worked at a smaller scale and combined the TCIE data with the NYC Department of City Planning's <a href='https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page' target='_blank'>Primary Land Use Tax Output</a> (PLUTO) dataset. With the vast majority of the BBLs in the TCIE set included in the PLUTO list, I could add information on addresses, approximate neighborhoods, boroughs and ownership, as of 2021. Given that landlords who have amassed a considerable number of properties can tend toward speculative behavior, I proceeded with a bubble chart of landlords with at least 10 properties found in the original TCIE data. Of course, buildings have changed hands over the past nearly two decades but at least from this collection of more than 25,000 properties, the visualization, color-coded by the borough(s) in which the landlord's buildings are found, gives an idea of the comparatively larger portfolios even in this sample of properties out of the more than 850,000 in the PLUTO dataset. As above, this chart would also be meant for the eyes of someone looking for trends and individual areas and properties of interest, intended to give them an idea, not comprehensive insight, into ownership among the TCIE dataset. Though it is also visualizing aggregated data, in this case it can lead one in the direction of, say, specific landlords.
                </p>
            </section>
        </div>
    )
}