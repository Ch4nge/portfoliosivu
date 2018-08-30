import React from 'react'
import { Header, Form, Grid } from 'semantic-ui-react'
import SkillForm from '../components/SkillForm'
import ProjectForm from '../components/ProjectForm'
import AdminSkillList from '../components/AdminSkillList'
import AdminProjectList from '../components/AdminProjectList'
import { switchPage } from '../reducers/navReducer'
import { connect } from 'react-redux'

class Admin extends React.Component {

  constructor() {
    super()
    this.state = {
      formName: 'skill'
    }
  }

  componentDidMount() {
    this.props.switchPage('admin')
  }


  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value][0]
    })
  }
  render() {
    const { formName } = this.state
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
          {formName === 'skill' ? <SkillForm /> : <ProjectForm />}
        </Grid.Column>
        <Grid.Column width={16}>
          {formName === 'skill' ? <AdminSkillList /> : <AdminProjectList />}
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(null, { switchPage })( Admin )
