import React from 'react'
import Heading from '../components/Heading'
import LoginForm from '../components/LoginForm'
import Logout from '../components/Logout'
import { Segment, Icon, Container, Menu, Sidebar, Responsive } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class MobileContainer extends React.Component {

  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) {
      this.setState({ sidebarOpened: false })
    }
  }

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { activeNavi, user, children } = this.props
    const { sidebarOpened } = this.state
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened} >
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
          </Sidebar>
          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    {user ? <Logout /> : <LoginForm />}
                  </Menu.Item>
                </Menu>
              </Container>
              <Heading />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeNavi: state.activeNavi,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(MobileContainer))
