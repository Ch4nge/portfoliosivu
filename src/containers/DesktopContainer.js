import React from 'react'
import Heading from '../components/Heading'
import {
  Responsive,
  Menu,
  Container,
  Button,
  Segment } from 'semantic-ui-react'

class DesktopContainer extends React.Component {
  render() {
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlignt='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu
            size='large'
            inverted
            pointing={true}
            secondary={true}
          >
            <Container>
              <Menu.Item as='a'>
              Home
              </Menu.Item>
              <Menu.Item as='a'>
              Blog
              </Menu.Item>
              <Menu.Item as='a'>
              Coding activity
              </Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted>
                  Log in
                </Button>
                <Button
                  as='a'
                  inverted
                  style={{ marginLeft: '0.5em' }}>
                  Sign up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <Heading />
        </Segment>
      </Responsive>
    )
  }
}

export default DesktopContainer
