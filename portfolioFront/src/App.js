import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Home from './pages/Home'
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <DesktopContainer>
          <Route exact path='/' render={() => <Home />} />
        </DesktopContainer>
      </Router>
    )
  }
}

export default App
