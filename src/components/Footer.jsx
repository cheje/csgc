import React from "react"
import { Link } from 'react-router-dom'
import './../index.css'
import ghLogo from './../img/GitHub-Mark-Light-64px.png'

export default function Footer() {
    return (
        <footer>
            <section className='footer--bar footer--text'>
                <div className='footer--left nav--text'>
                    <ul>
                        <li><a href='https://github.com/cheje/csgc' target='_blank'><img alt='GitHub logo' src={ghLogo}/></a></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li><a href='mailto:jcheng1@gradcenter.cuny.edu' target='_blank' rel='noopener noreferrer'>Email</a></li>
                    </ul>
                </div>
                <div className='footer--right'>
                </div>
            </section>
        </footer>
    )
}