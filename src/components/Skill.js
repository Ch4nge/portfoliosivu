import React from 'react'
import { Divider, Image, Grid, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Skill = ({ skill }) => {
  return(
    <Grid.Column width='8'>
      <Container>
        <Header
          as='h2'
          position='right'
        >
          <Image src={skill.imageSrc}/>
          {skill.title}
        </Header>
        <p>
          {skill.content}
        </p>
        <a href={skill.gitLink}>{skill.gitText}</a>
      </Container>
      <Divider />
    </Grid.Column>
  )
}

const mapStateToProps = (state, props) => {
  return {
    skill: state.skills.find( s => s.id === props.id)
  }
}
export default connect(mapStateToProps)(Skill)
