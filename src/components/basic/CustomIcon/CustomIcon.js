import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiAccountCircle } from '@mdi/js'

class CustomIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onClick = () => {
    if (this.props.onClick) this.props.onClick()
  }

  render() {
    return (
      <div className={this.props.className}>
        <Icon
          path={this.props.icon ? this.props.icon : mdiAccountCircle}
          size={this.props.size ? this.props.size : 1}
          color={this.props.color ? this.props.color : 'black'}
          className={this.props.className ? this.props.className : ''}
          onClick={this.onClick}
        />
      </div>
    )
  }
}

export default CustomIcon
