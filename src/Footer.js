import React from "react"
import './index.css'

export default function Footer() {
    return (
        <div style={{ justifyContent: 'flex-end'}} className='footer--links'>
            {/* <section style={{ display: 'flex', justifyContent: 'flex-end' }}> */}
            <section style={{ color: '#ffffff' }}>
                    <a href='https://github.com/cheje/gccs' target='_blank'><img width='15px' alt='GitHub logo' src='/img/GitHub-Mark-Light-64px.png'/></a>&nbsp;&nbsp;
                    <a href='https://jenche.shinyapps.io/lpcr/' target='_blank'>Data sources</a>&nbsp;|&nbsp;
                    <a href='https://jenche.shinyapps.io/lpcr/' target='_blank'>Methodology</a>&nbsp;|&nbsp;
                    <a href='https://natural-twill-b5c.notion.site/Resources-9110b585bb174d8cb6d217474b3f891d' target='_blank'>Resources</a>&nbsp;|&nbsp;
                    <a href='https://jenche.shinyapps.io/lpcr/' target='_blank'>Thank you</a>&nbsp;|&nbsp;
                    <a href='mailto:jcheng1@gradcenter.cuny.edu' target='_blank'>Email</a>&nbsp;&nbsp;
            </section>
        </div>
    )
}