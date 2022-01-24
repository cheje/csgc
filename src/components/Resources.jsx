import React from 'react'
import Title from './Title'
import './../index.css'

export default function Resources() {
  return (
    <section>
      <Title />
      <h2 className='title'>Resources</h2>
      <p>
        Read more on housing in New York City through the sources found below. This is by no means a comprehensive list
        of the wealth of information available. Also find below links to data visualization tools and tutorials.
      </p>
      <h4 className='subhead' style={{ color: '#293F32' }}>
        Housing
      </h4>
      <h5 className='subsubhead'>Organizations</h5>
      <h5 className='subsubhead'>Factsheets, Glossaries, Reports</h5>
      <h5 className='subsubhead'>NYC News</h5>
      <h5 className='subsubhead'>Data and Visualizations</h5>
      <hr className='dashed' />
      <h4 className='subhead' style={{ color: '#293F32' }}>
        Data Visualization
      </h4>
      <h5 className='subsubhead'>Tools</h5>
      <h5 className='subsubhead'>Tutorials</h5>
      <p>Here are some of the guides I followed to make this website.</p>
    </section>
  )
}
