import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <DesktopContainer>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/admin' render={() => <Admin />} />
        </DesktopContainer>
      </Router>
    )
  }
}

export default App
