import React from 'react'
import AdminProject from './AdminProject'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

const AdminProjectList = (props) => {
  console.log(props.projects)
  return (
    <List divided verticalAlign='middle'>
      {props.projects.map( (project) =>
        <AdminProject project={project} key={project.id+'AProject'}/>
      )}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(AdminProjectList)
