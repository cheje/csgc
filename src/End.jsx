import React from "react"
import './index.css'

export default function End() {
    return (
        <div style={{ paddingBottom: "45px"}}>  {/*, boxShadow: `inset 0 -8px 8px -10px rgba(0, 0, 0, 0.9)` }*/}
            <section className='vis-caption'>Code source: Mapbox's <a href='https://blog.mapbox.com/how-to-build-a-scrollytelling-map-ead6baf2cd1b' target='_blank'>Interactive Storytelling template</a>

                <p style={{ paddingTop: '1em' }}>
                <span style={{ textTransform: 'uppercase', fontWeight: 'bold', fontFamily: 'Roboto Condensed'}}>Thank you</span> [names]
                </p>
            </section>
        </div>
    )
}