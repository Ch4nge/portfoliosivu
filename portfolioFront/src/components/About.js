import React from 'react'
import { Image, Header, Container, Grid } from 'semantic-ui-react'

class About extends React.Component {
  render() {
    const pStyle = {
      fontSize: '1.4em'
    }
    const headerStyle = {
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
              style={headerStyle}/>
            <p style={pStyle}>Creating portfolio for Sami? Tired of constantly asking about his skillset
              and projects? We got the solution for you!</p>
            <p style={pStyle}>With SamAPI your very own portfolio of Sami is just few clicks away. Endpoints are:</p>
            <a> Linkki </a>
            <br/>
            <a> Linkki </a>
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
