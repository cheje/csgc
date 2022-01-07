import React from 'react'
import './index.css'
import expensesSS from './img/shiny-expenses.png'
import crSS from './img/shiny-cr.png'

export default function Shiny() {
    return(
        <section>
            <div style={{ paddingBottom: '50px' }}>
            Quisque bibendum enim at arcu molestie cursus. Fusce sollicitudin orci lacus, vel pulvinar ipsum sodales ac. Quisque quis enim auctor, elementum lorem a, pretium massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac nulla tincidunt, mollis nisi et, lacinia tellus. Fusce dictum risus ac rutrum luctus. Duis id libero molestie, elementum ligula a, laoreet orci. Maecenas tellus augue, efficitur nec mattis eu, viverra ac sapien.
            </div>
            <div className='flex-container-shiny'>
                <div className='flex-child'>
                Pellentesque sit amet nulla elit. Etiam convallis quis purus eleifend pellentesque. Donec nec aliquam tortor. Vivamus eget mauris sapien. Aliquam eget dictum sapien, tempor posuere ipsum. Maecenas lacinia varius hendrerit. Vestibulum vehicula tincidunt pharetra. Suspendisse potenti.
                </div>
                <div className='flex-child'>
                <a href='https://jenche.shinyapps.io/lpexp/' target='_blank'><img width='400px' alt='Screenshot of expenses dashboard' src={expensesSS} style={{ boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.1)' }}/></a>
                    <button className='button'><a href='https://jenche.shinyapps.io/lpexp/' target='_blank' className='button--link'>EXPENSES</a></button>
                </div>
            </div>
<br />
            <div className='flex-container-shiny'>
                <div className='flex-child'>
                    Pellentesque sit amet nulla elit. Etiam convallis quis purus eleifend pellentesque. Donec nec aliquam tortor. Vivamus eget mauris sapien. Aliquam eget dictum sapien, tempor posuere ipsum. Maecenas lacinia varius hendrerit. Vestibulum vehicula tincidunt pharetra. Suspendisse potenti.
                </div>
                <div className='flex-child'>
                <a href='https://jenche.shinyapps.io/lpcr/' target='_blank'><img width='400px' src={crSS} alt='Screenshot of cap rates dashboard' style={{ boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.1)' }}/></a>
                    <button className='button'><a href='https://jenche.shinyapps.io/lpcr/' target='_blank' className='button--link'>CAP RATES</a></button>
                </div>
            </div>
        </section>
    )
}