import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Skills from './components/Skills'
import { Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <DesktopContainer>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width='8'>
              <Skills />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </DesktopContainer>
    )
  }
}

export default App
