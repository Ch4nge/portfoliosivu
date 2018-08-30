import React from 'react'
import Heading from '../components/Heading'
import {
  Responsive,
  Menu,
  Container,
  Segment } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import Logout from '../components/Logout'
import { connect } from 'react-redux'

class DesktopContainer extends React.Component {
  render() {
    const { user, children, activeNavi } = this.props
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
              <Menu.Item active={'home' === activeNavi}>
                <NavLink to='/'>Home</NavLink>
              </Menu.Item>
              <Menu.Item active={'activity' === activeNavi}>
                <NavLink to='/activity'>Activity</NavLink>
              </Menu.Item>
              { user?
                <Menu.Item active={'admin' === activeNavi}>
                  <NavLink to='/admin'>Admin</NavLink>
                </Menu.Item> : null
              }
              <Menu.Item position='right'>
                {user ? <Logout /> : <LoginForm /> }
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activeNavi: state.activeNavi
  }
}

export default withRouter(connect(mapStateToProps)( DesktopContainer ))
