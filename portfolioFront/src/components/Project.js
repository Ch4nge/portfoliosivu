import React from 'react'
import { Icon, Divider, Grid, Header, Image, Container } from 'semantic-ui-react'

class Project extends React.Component {
  render() {
    const { project } = this.props
    const contentStyle = {
      fontSize: '1.2em'
    }
    return (
      <Grid.Row>
        <Grid.Column width={10}>
          <Header >{project.title}</Header>
          <Container style={contentStyle}>{project.content}</Container>
        </Grid.Column>
        <Grid.Column width={6}>
          <Image rounded src={project.imageSrc}/>
        </Grid.Column>
        <Grid.Column width={16} style={{ marginTop:'1em' }}>
          <a href={project.moreInfo}><Icon name='github' />Learn more! </a>
          <Divider />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default Project
