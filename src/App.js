import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navigation from './components/Navigation'
import About from './components/About'
import Resources from './components/Resources'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Dataset from './components/Dataset'
import Visualizations from './components/Visualizations'
import Map3D from './components/Map3D'
import config from './components/config.js'
import End from './components/End'
import ScrollTop from './components/ScrollTop'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
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
      <Map3D {...config} />
      <End />
      <ScrollTop />
    </div>
  )
}