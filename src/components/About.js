import React from 'react'
import { Header, Container, Grid } from 'semantic-ui-react'

class About extends React.Component {
  render() {
    const pStyle = {
      fontSize: '1.4em'
    }
    const heaerStyle = {
      fontSize: '2em'
    }
    return (
      <Grid padded='vertically' container stackable verticalAlign='middle'>
        <Grid.Column width='12'>
          <Container>
            <Header as='h2'
              content='About this site'
              style={heaerStyle}/>
            <p style={pStyle}> Imagine if you could create portfolio of sami hautamäki lightning fast.. </p>
            <p style={pStyle}> Well.. Now it is possible! endpoints are: </p>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

export default About
