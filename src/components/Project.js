import React from 'react'
import { Divider, Grid, Header, Image, Container } from 'semantic-ui-react'

class Project extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={10}>
          <Header > Moi </Header>
          <Container>
            ToDo -list and Bust tracking on the same software! This one is created with
            Meteor and React, mainly for learning purposes only. I wasnt great React user
            when I created it, so code is not that pretty.
          </Container>
        </Grid.Column>
        <Grid.Column width={6}>
          <Image rounded src='https://github.com/Ch4nge/ReactProject/raw/master/pics/Gmap.png'/>
        </Grid.Column>
        <Grid.Column width={16}>
          <Divider />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default Project
