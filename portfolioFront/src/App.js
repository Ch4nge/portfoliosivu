import React, { Component } from 'react'
import ResponsiveContainer from './containers/ResponsiveContainer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Activity from './pages/Activity'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { initSkills } from './reducers/skillsReducer'
import { initUser } from './reducers/userReducer'
import { initProjects } from './reducers/projectsReducer'
import { connect } from 'react-redux'
import skillsService from './services/skills'
import projectsService from './services/projects'

class App extends Component {
  componentDidMount() {
    this.props.initSkills()
    this.props.initProjects()
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      this.props.initUser(user)
      skillsService.setToken(user.token)
      projectsService.setToken(user.token)
    }
  }

  render() {
    return (
      <Router>
        <ResponsiveContainer>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/admin' render={() => <Admin />} />
          <Route exact path='/activity' render={() => <Activity />} />
        </ResponsiveContainer>
      </Router>
    )
  }
}

export default connect(null, { initProjects, initUser, initSkills })( App )
