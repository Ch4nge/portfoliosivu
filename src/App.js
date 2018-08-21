import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Skills from './components/Skills'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <DesktopContainer>
        <About />
        <Skills />
      </DesktopContainer>
    )
  }
}

export default App
