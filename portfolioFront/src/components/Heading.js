import React from 'react'
import { Header, Container } from 'semantic-ui-react'


class Heading extends React.Component {
  render() {
    return (
      <Container text textAlign='center'>
        <Header
          as='h1'
          content='SamAPI'
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em' }} />
        <Header
          as='h2'
          content='Creating Sami Hautamäkis portfolios easily!'
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />


      </Container>
    )
  }
}

export default Heading
