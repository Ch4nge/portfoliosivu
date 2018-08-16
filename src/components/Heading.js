import React from 'react'
import { Header, Icon, Button, Container } from 'semantic-ui-react'


class Heading extends React.Component {
  render() {
    return (
      <Container text textAlign='center'>
        <Header
          as='h1'
          content='Sami Hautamäki'
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em' }} />
        <Header
          as='h2'
          content='Your companys new programmer'
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
