import React from 'react'
import './../index.css'

export default function End() {
  return (
    <div>
      <section>
        <div className='vis-caption' style={{ marginTop: '-1rem' }}>
          Code source: Mapbox's{' '}
          <a href='https://github.com/mapbox/storytelling' target='_blank' rel='noopener noreferrer'>
            Interactive Storytelling template
          </a>
        </div>

        <p style={{ paddingTop: '3rem' }}>
          For full citations, see the bibliography page of the white paper [<i>link coming soon</i>].
        </p>

        <h5 className='subsubhead'>Related links</h5>

        <ul>
          <li>
            <a
              href='https://datajournalism.com/read/longreads/humanising-data-connecting-numbers-and-people'
              target='_blank'
              rel='noopener noreferrer'>
              Humanising data: Connecting numbers and people
            </a>
            , <i>December 29, 2021</i>
          </li>
        </ul>
        <br />
        <hr className='dashed' />
        <p style={{ fontStyle: 'italic' }}>
          This project makes up the digital component of the capstone requirement for the M.S. program in{' '}
          <a
            href='https://gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Masters-Programs/Data-Analysis-and-Visualization'
            target='_blank'
            rel='noopener noreferrer'>
            Data Analysis and Visualization program
          </a>{' '}
          at the CUNY Graduate Center. The text pulls from portions of the white paper.
        </p>
      </section>
    </div>
  )
}
