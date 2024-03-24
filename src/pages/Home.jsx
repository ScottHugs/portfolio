import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Intro from '../containers/Intro'
import AboutMe from '../containers/AboutMe'
import Skills from '../containers/Skills'
import Projects from '../containers/Projects'
import Contact from '../containers/Contact'
import Footer from '../components/footer/MainFooter'


function Home() {

  return (
    <div>
      {/* Navbar */}
      <Navbar />  

      {/* Intro */}
      <Intro />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer /> 

    </div>
  )
}

export default Home;