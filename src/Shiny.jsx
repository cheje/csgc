import React from 'react'
import './index.css'
import expensesSS from './img/shiny-expenses.png'
import crSS from './img/shiny-cr.png'

export default function Shiny() {
    return(
        <section>
            <div style={{ paddingBottom: '50px' }}>
                <p>Explore them in the dashboards linked below. Thousands of points still remain but in this case, you can zoom in to specific regions and see not just buildings with potential risk of speculation, but also regions where clusters exist. In those cases, large-scale development projects might be on the horizon.</p>
                
            </div>
            <div className='flex-container-shiny'>
                <div className='flex-child'>
                    <ul>
                        <li>Map and table of properties that at some point between 2004-2019 had expenses as 35% or lower of their income</li>
                        <li>Chart and table of expense history for all properties in the TCIE-PLUTO dataset</li>
                    </ul>
                </div>
                <div className='flex-child'>
                    <a href='https://jenche.shinyapps.io/lpexp/' target='_blank'><img width='400px' alt='Screenshot of expenses dashboard' src={expensesSS} style={{ boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.1)' }}/></a>
                    <button className='button'><a href='https://jenche.shinyapps.io/lpexp/' target='_blank' className='button--link'>EXPENSES</a></button>
                </div>
            </div>
            <br />
            <div className='flex-container-shiny'>
                <div className='flex-child'>
                    <ul>
                        <li>Map of properties that at some point between 2004-2019 had a cap rate of under 3.5</li>
                        <li>Table of same data includes all years where a property had a cap rate under 3.5</li>
                    </ul>
                </div>
                <div className='flex-child'>
                    <a href='https://jenche.shinyapps.io/lpcr/' target='_blank'><img width='400px' src={crSS} alt='Screenshot of cap rates dashboard' style={{ boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.1)' }}/></a>
                    <button className='button'><a href='https://jenche.shinyapps.io/lpcr/' target='_blank' className='button--link'>CAP RATES</a></button>
                </div>
            </div>
            <div style={{ padding: '50px 0 35px 0' }}>
            <p>
                The visualizations above have been presented as a sort of behind-the-scenes means of finding buildings where real estate speculation, and forms of profit over tenants, might be occurring. Using variables such as expense, cap rate history and geographic location can help narrow down the original data into points that might guide journalists, advocates, researchers or residents in potentially helpful directions for further investigation.
            </p>
            <p>
                In the final visualization for my project, rather than pinpointing buildings or areas of possible interest based on the visuals so far, I looked for some residential buildings covered in 2021 in local NYC media outlets in the context of rezoning, complaints, gentrification and maintenance, and other possibilities of distress. I then worked backwards to see whether they were part of the TCIE-PLUTO dataset, and if so, what kind of expense history they had. This part is not meant to imply correlation or any direct influence between expenses and the speculative status of a building but rather to show how the expense history might help to look into property histories.
            </p>
            <p style={{ textAlign: 'center', fontFamily: 'Roboto Condensed', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '0.9em' }}>Scroll down &nbsp;&nbsp;<i class="arrow arrow-down"></i></p>
            </div>
        </section>
    )
}