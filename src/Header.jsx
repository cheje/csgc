import React from "react"
import './index.css'

export default function Header() {
    return (
        <div className="header">
            <section>
                <h1 className="header--title">
                    Disrepair, Displacement and Distress
                </h1>
                <h3 className="header--subhead">
                    Finding Housing Stories Through Data Visualizations
                </h3>
                <p style={{ marginTop: '-15px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Roboto Condensed', fontSize: '0.85em' }}>By Jennifer Cheng</p>
                <p style={{ fontStyle: 'italic', fontFamily: 'Roboto', fontSize: '0.8em', lineHeight: '1.2' }}>This project comprises the digital component of the capstone requirement for the Data Analysis and Visualization M.S. program at the CUNY Graduate Center. The text below pulls from portions of the white paper.</p>
            </section>
        </div>
    )
}