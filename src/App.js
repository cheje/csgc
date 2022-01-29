import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import Navigation from './components/Navigation'
import About from './components/About'
import Resources from './components/Resources'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Dataset from './components/Dataset'
import Visualizations from './components/Visualizations'
import End from './components/End'
import ScrollTop from './components/ScrollTop'
import Mapbox from './components/Mapbox.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resources' element={<Resources />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Dataset />
      <Visualizations />
      <Mapbox />
      <End />
      <ScrollTop />
    </div>
  )
}
