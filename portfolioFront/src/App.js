import React, { Component } from 'react'
import DesktopContainer from './containers/DesktopContainer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { initSkills } from './reducers/skillsReducer'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.initSkills()
  }

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

export default connect(null, { initSkills })( App )
