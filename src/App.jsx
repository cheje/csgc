import React from "react"
import './index.css'
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Dataset from "./components/Dataset"
import Visualizations from './components/Visualizations'
import Map3D from "./components/Map3D"
import config from './components/config.js'
import End from "./components/End"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"

export default function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Dataset />
      <Visualizations />
      <Map3D {...config} />
      <End />
      <Footer />
      <ScrollTop />
    </div>
  )
}