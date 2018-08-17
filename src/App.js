import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Skills from './components/Skills'

class App extends Component {
  render() {
    return (
      <DesktopContainer>
        <Skills />
      </DesktopContainer>
    )
  }
}

export default App
