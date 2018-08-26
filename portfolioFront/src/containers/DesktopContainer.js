import React from 'react'
import Heading from '../components/Heading'
import {
  Responsive,
  Menu,
  Container,
  Button,
  Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class DesktopContainer extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign='center'
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
              <Menu.Item active>
                <NavLink to='/'>Home</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='/blog'>Blog</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='/admin'>Admin</NavLink>
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
        {children}
      </Responsive>
    )
  }
}

export default DesktopContainer
