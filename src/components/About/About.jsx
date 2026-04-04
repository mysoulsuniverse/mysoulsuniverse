import React from 'react'
import AboutHero from './AboutHero'
import AboutSection1 from './AboutSection1'
import Philosophy from './Philosophy'
import Values from './Values'
import TeamSection from './TeamSection'
import Testimonials from './Testimonials'
import Gallery from './Gallery'

function About() {
  return (
    <div>
        <AboutHero />
        <AboutSection1 />
        <Philosophy />
        <Values />
        <Gallery />
      {/*  <Testimonials /> */} 
        
        <TeamSection />
    </div>
  )
}

export default About