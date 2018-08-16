import React from 'react'
import { Responsive } from 'semantic-ui-react'

class DesktopContainer extends React.Component {
  render() {
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>

      </Responsive>
    )
  }
}

export default DesktopContainer
