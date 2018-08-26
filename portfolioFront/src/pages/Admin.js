import React from 'react'
import { Form, Grid } from 'semantic-ui-react'

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
        <Grid.Row>
          <Grid.Column>
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
        </Grid.Row>
      </Grid>
    )
  }
}

export default Admin
