import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import { Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <DesktopContainer>
        <About />
        <Divider horizontal>Skills</Divider>
        <Skills />
        <Divider horizontal>Projects</Divider>
        <Projects />
        <Footer/>
      </DesktopContainer>
    )
  }
}

export default App
