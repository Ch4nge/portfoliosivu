import React from 'react'
import { Segment, Image, Header, Container, Grid } from 'semantic-ui-react'

class About extends React.Component {
  render() {
    const pStyle = {
      fontSize: '1.4em'
    }
    const heaerStyle = {
      fontSize: '2em'
    }
    const gridStyle = {
      padding: '4em 0em'
    }
    return (
      <Grid style={gridStyle} padded='vertically' container stackable verticalAlign='middle'>
        <Grid.Column width='8'>
          <Container>
            <Header as='h2'
              content='About this site'
              style={heaerStyle}/>
            <p style={pStyle}> Imagine if you could create portfolio of sami hautamäki lightning fast.. </p>
            <p style={pStyle}> Well.. Now it is possible! endpoints are: </p>
          </Container>
        </Grid.Column>
        <Grid.Column width='6' floated='right'>
          <Image bordered rounded size='small' src='http://16tiko1a.projects.tamk.fi/img/sami.png'/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default About
