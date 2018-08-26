import React from 'react'
import { Form, Grid } from 'semantic-ui-react'

class Admin extends React.Component {
  render() {
    return (
      <Grid padded='vertically' container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Form.Field label='Form type' control='select'>
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
