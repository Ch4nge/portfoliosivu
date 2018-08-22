import React from 'react'
import { Grid, Header, Image, Container } from 'semantic-ui-react'

class Project extends React.Component {
  render() {
    return (
      <Container>
        <Grid.Row>
          <Grid.Column width='12'>
            <Header as='h2'> Heipä hei! </Header>
          </Grid.Column>
          <Grid.Column width='4'>
            <Image src='https://github.com/Ch4nge/ReactProject/raw/master/pics/Gmap.png'/>
          </Grid.Column>
        </Grid.Row>
      </Container>
    )
  }
}

export default Project
