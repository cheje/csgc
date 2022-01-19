import React from "react"
import './../index.css'

export default function End() {
    return (
        <div style={{ paddingBottom: "45px"}}> 
            <section>
                <div className='vis-caption'>
                    Code source: Mapbox's <a href='https://blog.mapbox.com/how-to-build-a-scrollytelling-map-ead6baf2cd1b' target='_blank'>Interactive Storytelling template</a>
                </div>

                <p style={{ paddingTop: '5rem' }}>
                    For full citations, see the bibliography page of the white paper [<i>link coming soon</i>].
                </p>

                <p style={{ fontStyle: 'italic' }}>
                    This project makes up the digital component of the capstone requirement for the M.S. program in <a href='https://gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Masters-Programs/Data-Analysis-and-Visualization' target='_blank' rel='noopener noreferrer'>Data Analysis and Visualization program</a> at the CUNY Graduate Center. The text pulls from portions of the white paper.
                </p>
            </section>
        </div>
    )
}