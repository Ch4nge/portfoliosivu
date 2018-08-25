import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'

class Footer extends React.Component {
  render() {
    const textSize = {
      fontSize: '1.5em'
    }
    return (
      <Segment
        inverted
        vertical
        style={{ padding: '5em 0em' }}
        textAlign='center'>
        <p style={textSize}> sami.hautamaki@cs.tamk.fi </p>
        <p style={textSize}> +358 400366613 </p>
        <a style={{ fontSize: '2em' }}
          href='https://github.com/Ch4nge'>
          <Icon name='github' /> Ch4nge
        </a>
      </Segment>
    )
  }
}

export default Footer
