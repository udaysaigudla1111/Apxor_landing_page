import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Dashboard from './Components/Dashboard'
import Ribbon from './Components/Ribbon'
import EngagementHooks from './Components/EngagementHooks'
import Testimonials from './Components/Testimonials'
import Integrations from './Components/Integrations'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='h-auto'>
      <Banner/>
      <Navbar/>
    <Dashboard/>
    <Ribbon/>
    <EngagementHooks/>
    <Testimonials/>
    <Integrations/>
    <Footer/>
    </div>


  )
}

export default App