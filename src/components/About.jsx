import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import './../app.css'

export default function About() {
  return (
    <div>
      <section>
        <Title />
        <h2 className='title'>About</h2>
        <p>
          This project makes up the digital component of the capstone requirement for the M.S. program in{' '}
          <a
            href='https://gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Masters-Programs/Data-Analysis-and-Visualization'
            target='_blank'
            rel='noopener noreferrer'>
            Data Analysis and Visualization
          </a>{' '}
          at the CUNY Graduate Center. The text pulls from portions of the white paper.
        </p>
        <p>
          See the <Link to='/resources'>resources</Link> page for the datasets used in the project.
        </p>
        <hr className='dashed' />
        <h4 className='subhead' style={{ color: '#293F32' }}>
          Thank you
        </h4>
        <br />
        <b>Ellie Frymire</b>, capstone advisor, M.S. Program in Data Analysis and Visualization
        <br />
        <b>Matt Gold</b>, program director, M.S. Program in Data Analysis and Visualization
        <br />
        <b>Barbara Gray</b>, chief librarian and associate professor, Craig Newmark Graduate School of Journalism
        <br />
        <b>Jason Nielsen</b>, program coordinator, M.S. Program in Data Analysis and Visualization
      </section>
    </div>
  )
}
