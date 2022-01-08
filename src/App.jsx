import React from "react"
import './index.css'
import Header from "./Header"
import Introduction from "./Introduction"
import Dataset from "./Dataset"
import Portfolios from './Portfolios'
import CR from "./CR"
import Scrollytelling from './Scrollytelling'
import Shiny from './Shiny'
import Map3D from "./Map3D"
import config from './config.js'
import End from "./End"
import Footer from "./Footer"

export default function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Dataset />
      <Portfolios />
      <CR />
      <Scrollytelling />
      <Shiny />
      <Map3D {...config} />
      <End />
      <Footer />
    </div>
  )
}