import React from 'react'
import { Header, Container } from 'semantic-ui-react'


class Heading extends React.Component {
  render() {
    const { mobile } = this.props
    return (
      <Container text textAlign='center'>
        <Header
          as='h1'
          content='SamAPI'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em' }} />
        <Header
          as='h2'
          content='Creating Sami Hautamäki&#39;s portfolios since 2018'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />

      </Container>
    )
  }
}

export default Heading
