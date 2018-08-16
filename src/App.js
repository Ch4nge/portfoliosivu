import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Skills from './components/Skills'
import { Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <DesktopContainer>
        <Grid>
          <Skills />
        </Grid>
      </DesktopContainer>
    )
  }
}

export default App
