import React from 'react'
import AdminSkill from './AdminSkill'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

const AdminSkillList = (props) => {
  return (
    <List divided verticalAlign='middle'>
      {props.skills.map( (skill) =>
        <AdminSkill skill={skill} key={skill.id+'ASkill'}/>
      )}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
}

export default connect(mapStateToProps)(AdminSkillList)
