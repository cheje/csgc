import React from "react"
import './../index.css'

export default function End() {
    return (
        <div style={{ paddingBottom: "45px"}}> 
            <section className='vis-caption'>Code source: Mapbox's <a href='https://blog.mapbox.com/how-to-build-a-scrollytelling-map-ead6baf2cd1b' target='_blank'>Interactive Storytelling template</a>
            </section>
            <section>
                <p>For full citations, see the bibliography page of the white paper [<i>link coming soon</i>]. See resources on housing, data and advocacy organizations <a href='https://natural-twill-b5c.notion.site/Resources-9110b585bb174d8cb6d217474b3f891d' target='_blank'>here</a>.</p>
                <h4 className="text subhead">Thank you</h4>
                <b>Ellie Frymire</b>, capstone advisor, M.S. Program in Data Analysis and Visualization
                <br /><b>Matt Gold</b>, program director, M.S. Program in Data Analysis and Visualization
                <br /><b>Barbara Gray</b>, chief librarian, Craig Newmark Graduate School of Journalism
                <br /><b>Jason Nielsen</b>, program coordinator, M.S. Program in Data Analysis and Visualization
            </section>
        </div>
    )
}