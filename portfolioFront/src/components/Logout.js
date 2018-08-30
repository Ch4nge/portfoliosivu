import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { initUser } from '../reducers/userReducer'

class Logout extends React.Component {
  logout = () => {
    window.localStorage.clear()
    this.props.initUser(null)
  }
  render() {
    return (
      <Button inverted onClick={this.logout}> Log out </Button>
    )
  }
}

export default connect(null, { initUser })( Logout )
