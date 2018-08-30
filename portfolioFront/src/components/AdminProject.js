import React from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../reducers/projectsReducer'
import { Image, Button, List } from 'semantic-ui-react'

const AdminProject = ({ project, deleteProject }) => {
  console.log(project)
  return(
    <List.Item>
      <List.Content floated='right'>
        <Button
          color='red'
          onClick={() => deleteProject(project.id)}>
          Delete
        </Button>
      </List.Content>
      <Image avatar src={project.imageSrc} />
      <List.Content>
        {project.title}
      </List.Content>
    </List.Item>
  )
}

export default connect(null, { deleteProject })( AdminProject )
