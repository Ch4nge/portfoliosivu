import React from 'react'
import { connect } from 'react-redux'
import { deleteSkill } from '../reducers/skillsReducer'
import { Image, Button, List } from 'semantic-ui-react'

const AdminSkill = ({ skill, deleteSkill }) => {
  return(
    <List.Item>
      <List.Content floated='right'>
        <Button
          color='red'
          onClick={() => deleteSkill(skill.id)}>
          Delete
        </Button>
      </List.Content>
      <Image avatar src={skill.imageSrc} />
      <List.Content>
        {skill.title}
      </List.Content>
    </List.Item>
  )
}

export default connect(null, { deleteSkill })( AdminSkill )
