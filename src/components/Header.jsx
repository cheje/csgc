import React from 'react'
import './../app.css'

export default function Header() {
  return (
    <section style={{ textAlign: 'center' }}>
      <span className='title--ddd'>Best viewed on a desktop/laptop</span>
      <h1 className='title'>Disrepair, Displacement</h1>
      <h1 className='title'>and Distress</h1>
      <h3 className='subtitle'>Finding Housing Stories Through Data Visualizations</h3>
      <p className='title--ddd' style={{ marginTop: '-1rem', fontWeight: 'bold' }}>
        By Jennifer Cheng, Fall 2021
      </p>
    </section>
  )
}
