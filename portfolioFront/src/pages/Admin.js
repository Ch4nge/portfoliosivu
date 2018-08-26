import React from 'react'
import { Header, Form, Grid } from 'semantic-ui-react'
import SkillForm from '../components/SkillForm'

class Admin extends React.Component {

  constructor() {
    super()
    this.state = {
      formName: 'skill'
    }
  }


  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value][0]
    })
  }
  render() {
    console.log(this.state.formName)
    return (
      <Grid padded='vertically' container stackable verticalAlign='middle'>
        <Grid.Column width={16}>
          <Header as='h2'>Secret admin area </Header>
          <Form>
            <Form.Field
              onChange={this.onChangeHandler}
              label='Form type'
              control='select'
              name='formName'>
              <option value='skill'> Skill </option>
              <option value='project'> Project </option>
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={16}>
          <SkillForm />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Admin
