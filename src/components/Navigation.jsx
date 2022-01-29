import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import './../app.css'

export default function Navigation() {
  return (
    <div className='page-container header--img'>
      <nav
        className='nav--text'
        style={{ borderBottom: '1px solid #96CEB4', width: '55vw', textAlign: 'right', margin: '0 auto' }}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/resources'>Resources</Link>
          </li>
          <li>
            <a href='mailto:jcheng1@gradcenter.cuny.edu' target='_blank' rel='noopener noreferrer'>
              Email
            </a>
          </li>
        </ul>
      </nav>
      <br />
      <Outlet />
      <br />
      <Footer />
    </div>
  )
}
