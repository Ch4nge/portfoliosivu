import React from 'react'
import { Form, Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../reducers/userReducer'

class LoginForm extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onClickHandler = () => {
    const { username, password } = this.state
    this.props.login({
      username: username,
      password: password
    })
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const{ username, password }=this.state
    return (
      <Modal trigger={<Button inverted >Login</Button>} centered >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              value={username}
              onChange={this.onChangeHandler}
              name='username'
              label='Username'
              placeholder='Username'/>
            <Form.Input
              value={password}
              onChange={this.onChangeHandler}
              name='password'
              label='Password'
              placeholder='Password'/>
            <Button color='green' onClick={this.onClickHandler}>Log in</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default connect(null, { login })( LoginForm )
