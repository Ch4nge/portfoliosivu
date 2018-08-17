import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'


class Skills extends React.Component {
  render() {
    return (
      <Container>
        <Header
          as='h2'
          position='right'
        >
          <Image src="https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png"/>
          React
        </Header>
        <p>
          React is web framework I&#44;m most confortable with, been using it in every single
          web application I have created. This site is created with React! My most recent
          react project would be this site (Which I created using complicated methods just
          to show you what I can do!).
        </p>
        <a href="">Github link to this sites code </a>
      </Container>

    )
  }
}

export default Skills
