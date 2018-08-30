import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { Divider } from 'semantic-ui-react'
import { switchPage } from '../reducers/navReducer'
import { connect } from 'react-redux'

class Home extends React.Component {
  componentDidMount() {
    this.props.switchPage('home')
  }
  render() {
    return (
      <div>
        <About />
        <Divider horizontal>Skills</Divider>
        <Skills />
        <Divider horizontal>Projects</Divider>
        <Projects />
        <Footer/>
      </div>
    )
  }
}

export default connect(null, { switchPage })( Home )
