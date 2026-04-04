import { useState } from 'react'
import navLogo from './assets/logo1.png'
import './App.css'
import Navbar from './components/Home/Navbar'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Footer from './components/Home/Footer'
import Contact from './components/Contacts/Contact'
import Services from './components/Services/Services'
import ServicesHome from './components/Services/ServicesHome'
import LinkAnnouncement from './components/Home/LinkAnnouncement'

function App() {
 

  return (
    <div>
      {/* <LinkAnnouncement  /> */}
      

      <Navbar />
      

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={ <About /> } />
        <Route path='/contacts' element={ <Contact /> } />
        <Route path='/services' element={ <ServicesHome /> } />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
