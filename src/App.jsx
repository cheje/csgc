import React from "react"
import './index.css'
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Dataset from "./components/Dataset"
import Portfolios from './components/Portfolios'
import FilteringData from "./components/FilteringData"
import Scrollytelling from './components/Scrollytelling'
import Shiny from './components/Shiny'
import Map3D from "./components/Map3D"
import config from './components/config.js'
import End from "./components/End"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Dataset />
      <Portfolios />
      <FilteringData />
      <Scrollytelling />
      <Shiny />
      <Map3D {...config} />
      <End />
      <Footer />
    </div>
  )
}