import React from "react"
import './index.css'

export default function Dataset() {
    return (
        <div>
            <section>
                <h4 className="text subhead">The Dataset</h4>
                <p>The dataset comes from Barbara Gray, the chief librarian at the Craig Newmark Graduate School of Journalism at CUNY, who submitted a FOIL request as part of her ongoing Landlords Project. This information on the income and expenses of city landlords, in conjunction with other datasets, can reveal the complexities and trends of the persisting housing crisis in New York and its impact on housing equity. The data originates from the NYC Department of Taxation and Finance and contains what landlords make and spend. The city requires owners of buildings with 10 or more income-generating units that amount to more than $40,000, to file income and expense statements (LINK) with the Department of Finance on a yearly basis. While these forms are considered private and exempt from FOIL request, it is when the landlord appeals their tax bill, and files a Tax Commission Income and Expense form, that the data can be FOILed. The dataset spans from 2005 through 2020 (the respective incomes and expenses are of the previous year), with 2008, 2013 and 2017 filings still to be received. This set of filings over time tells us how these variables, in association with individual buildings, changed over time. While the dataset does not contain every landlord's income and expenses, the large number of those who challenge their tax bill amounts a good sample of tens of thousands per year. Given these individual filings, in cases where a building appears in multiple years, we can observe outliers in terms of, for example, income increases that might suggest profit-driven tendencies. And with this sizable number of data points, we also have a historical snapshot of how a landlord's rent-stabilized income versus their market-rate income has changed. An increase in the latter would imply that they flipped rent-stabilized units to market-rate, and in the process displace tenants in pursuit of maximizing  assets.</p>
            </section>
        </div>
    )
}