import React from "react"
import './../index.css'

export default function Header() {
    return (
        <section>
            <h1 className="header--title">
                Disrepair, Displacement and Distress
            </h1>
            <h3 className="header--subhead">
                Finding Housing Stories Through Data Visualizations
            </h3>
            <p style={{ marginTop: '-1rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Roboto Condensed', fontSize: '0.85em' }}>By Jennifer Cheng, Fall 2021</p>
        </section>
    )
}