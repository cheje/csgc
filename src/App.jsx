import React from "react"
import './index.css'
import Header from "./Header"
import Background from "./Background"
import Dataset from "./Dataset"
import StackedBars from './StackedBars'
import Portfolios from './Portfolios'
import Bubbles from './Bubbles'
import CR from "./CR"
import Scrollytelling from './Scrollytelling'
import Shiny from './Shiny'
import Map3D from "./Map3D"
import config from './config.js'
import BelowMap from "./BelowMap"
import Footer from "./Footer"

export default function App() {
  return (
    <div>
      <Header />
      <Background />
      <Dataset />
      <StackedBars />
      <Portfolios />
      <Bubbles />
      <CR />
      <Scrollytelling />
      <Shiny />
      <Map3D {...config} />
      <BelowMap />
      <Footer />
    </div>
  )
}