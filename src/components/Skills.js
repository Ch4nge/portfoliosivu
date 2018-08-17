import React from 'react'
import Skill from './Skill'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'


class Skills extends React.Component {
  render() {
    const { skills } = this.props
    return (
      <Grid padded='vertically' divided container stackable verticalAlign='middle'>
        {skills.map( s =>  <Skill key={'skill: '+s.id} id={s.id} /> )}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
}

export default connect(mapStateToProps)(Skills)
