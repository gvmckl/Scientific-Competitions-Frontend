import React from 'react'
import NavBar from "./components/navbar/NavBar"
import Home from "./sections/home/Home"
import About from "./sections/about/About"
import Competitions from "./sections/competitions/Competitions"
import Footer from "./components/footer/Footer"

import './App.css'

function App() {
  return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Competitions />
        <Footer />
      </div>
  )
}

export default App;
