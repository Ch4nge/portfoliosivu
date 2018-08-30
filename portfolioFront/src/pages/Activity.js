import React from 'react'
import { Form, Image, Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { switchPage } from '../reducers/navReducer'

class Activity extends React.Component {

  constructor() {
    super()
    this.state = {
      links: [
        'https://wakatime.com/share/@0680d76a-85ad-4648-a4b7-d6f70b6980c1/3d0281df-c769-4cda-9c94-5f8f51a9266d.png',
        'https://wakatime.com/share/@0680d76a-85ad-4648-a4b7-d6f70b6980c1/c084eee5-742a-48bb-a70c-7ec3c940e4b7.png',
        'https://wakatime.com/share/@0680d76a-85ad-4648-a4b7-d6f70b6980c1/f41a0ecf-0eb9-41a1-9bb4-e748a6cd1ab9.png',
        'https://wakatime.com/share/@0680d76a-85ad-4648-a4b7-d6f70b6980c1/317c4a9e-0a2d-463a-8516-d26a4fb7c573.png'
      ],
      active: 0
    }
  }

  componentDidMount() {
    this.props.switchPage('activity')
  }

  handleChange = (event, { value }) => {
    this.setState({
      active: value
    })
  }
  render() {
    const { links, active } = this.state
    return (
      <Grid padded='vertically' container stackable verticalAlign='middle'>
        <Grid.Column width={16}>
          <Header as='h2'>My coding activity</Header>
          <p>
            Here you can track my coding hours and see if I&#39;v been slacking! Charts
            and tracking are done by wakatime.com and are updated daily.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Form>
            <Form.Group inline>
              <label>Sort</label>
              <Form.Radio
                label='By Day'
                value={0}
                checked={0 === active}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='By Language'
                value={1}
                checked={1 === active}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='By Editor'
                value={2}
                checked={2 === active}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='By Os'
                value={3}
                checked={3 === active}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
          <Image src={links[active]} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(null, { switchPage })( Activity )
