import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import Project from './Project'

class Projects extends React.Component {
  render() {
    const { projects } = this.props
    return (
      <Grid padded='vertically' container stackable >
        {projects.map( (p, i) => <Project project={p} key={'p'+i}/>)}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps)(Projects)
