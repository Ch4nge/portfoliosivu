import React from 'react'
import Skill from './Skill'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'


const Skills = ({ skills }) => {
  return (
    <Grid padded='vertically' container stackable verticalAlign='middle'>
      {skills.map( (s) =>  <Skill key={'skill: '+s.id} id={s.id} />
      )}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
}

export default connect(mapStateToProps)(Skills)
