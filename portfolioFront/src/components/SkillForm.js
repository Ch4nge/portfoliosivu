import React from 'react'
import { Button, Input, TextArea, Form } from 'semantic-ui-react'

class SkillForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      imageSrc: '',
      gitLink: '',
      gitText: '',
      content: ''
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value][0]
    })
  }

  render() {
    const { title, imageSrc, gitLink, gitText, content } = this.state
    console.log(this.state)
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
        <Form.Group widths='equal'>
          <Form.Field
            name='gitLink'
            value={gitLink}
            onChange={this.onChangeHandler}
            control={Input} label='Git link'
            placeholder='Git link' />
          <Form.Field
            name='gitText'
            value={gitText}
            onChange={this.onChangeHandler}
            control={Input}
            label='Git title'
            placeholder='Git title' />
        </Form.Group>
        <Form.Field
          name='content'
          value={content}
          onChange={this.onChangeHandler}
          control={TextArea}
          label='Content'
          placeholder='Content' />
        <Button color='green'>Add </Button>
      </Form>
    )
  }
}

export default SkillForm
