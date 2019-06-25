import React, { Component } from 'react'

export default class CustomText extends Component {
  render() {
    return <p>{this.props.children}</p>
  }
}
