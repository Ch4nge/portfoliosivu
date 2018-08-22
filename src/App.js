import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Skills from './components/Skills'
import About from './components/About'
import { Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <DesktopContainer>
        <About />
        <Divider horizontal>Skills</Divider>
        <Skills />
        <Divider horizontal>Projects</Divider>
      </DesktopContainer>
    )
  }
}

export default App
