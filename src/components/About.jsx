import React from 'react'
import Title from './Title'
import './../index.css'

export default function About() {
    return (
        <div>
            <section>
                <Title />
                <h1 className='header--title'>About</h1>
            <p style={{ paddingTop: '2rem' }}>
                This project makes up the digital component of the capstone requirement for the M.S. program in <a href='https://gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Masters-Programs/Data-Analysis-and-Visualization' target='_blank' rel='noopener noreferrer'>Data Analysis and Visualization</a> at the CUNY Graduate Center. The text pulls from portions of the white paper.
            </p>
            <p style={{ fontStyle: 'italic' }}>Coming soon...</p>
            <h4 className='text subhead'>Thank you</h4>
                <b>Ellie Frymire</b>, capstone advisor, M.S. Program in Data Analysis and Visualization
                <br /><b>Matt Gold</b>, program director, M.S. Program in Data Analysis and Visualization
                <br /><b>Barbara Gray</b>, chief librarian, Craig Newmark Graduate School of Journalism
                <br /><b>Jason Nielsen</b>, program coordinator, M.S. Program in Data Analysis and Visualization
            </section>
        </div>
    )
}