import React from 'react'
import { Button, Input, TextArea, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addProject }  from '../reducers/projectsReducer'

class ProjectForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      imageSrc: '',
      moreInfo: '',
      content: ''
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value][0]
    })
  }
  onClickHandler = () => {
    const { title, imageSrc, moreInfo, content } = this.state
    const obj = { title,imageSrc, moreInfo, content }
    if(window.confirm(`Add new project ${title}?`)){
      this.props.addProject(obj)
      this.setState({
        title: '',
        imageSrc: '',
        moreInfo: '',
        content: ''
      })
    }
  }

  render() {
    const { title, imageSrc, moreInfo, content } = this.state
    return (
      <Form>
        <Form.Field
          name='title'
          value={title}
          onChange={this.onChangeHandler}
          control={Input} label='Title'
          placeholder='Title' />
        <Form.Field
          name='imageSrc'
          value={imageSrc}
          onChange={this.onChangeHandler}
          control={Input} label='Image Source'
          placeholder='Image Source' />
        <Form.Field
          name='moreInfo'
          value={moreInfo}
          onChange={this.onChangeHandler}
          control={Input} label='Git link'
          placeholder='Git link' />
        <Form.Field
          name='content'
          value={content}
          onChange={this.onChangeHandler}
          control={TextArea}
          label='Content'
          placeholder='Content' />
        <Button color='green' onClick={this.onClickHandler}>Add </Button>
      </Form>
    )
  }
}

export default connect(null, { addProject })( ProjectForm )
