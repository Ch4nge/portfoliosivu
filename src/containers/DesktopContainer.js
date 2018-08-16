import React from 'react'
import {
  Responsive,
  Menu,
  Container,
  Segment } from 'semantic-ui-react'

class DesktopContainer extends React.Component {
  render() {
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlignt='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu size='large'>
            <Container>
              <Menu.Item>
              Home
              </Menu.Item>
              <Menu.Item>
              Blog
              </Menu.Item>
              <Menu.Item>
              Coding activity
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Responsive>
    )
  }
}

export default DesktopContainer
