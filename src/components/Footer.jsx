import React from "react"
import './../index.css'
import ghLogo from './../img/GitHub-Mark-Light-64px.png'

export default function Footer() {
    return (
        <div style={{ backgroundColor: '#293F32' }}>
            <section className='footer--bar footer--text'>
                <div className='footer--left'>
                    <a href='https://github.com/cheje/csgc' target='_blank'>
                        <img alt='GitHub logo' src={ghLogo}/>
                    </a>&nbsp;&nbsp;
                    White Paper&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='mailto:jcheng1@gradcenter.cuny.edu'>Email</a>
                </div>
                <div className='footer--right' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    Return to Top &#8593;
                </div>
            </section>
        </div>
    )
}