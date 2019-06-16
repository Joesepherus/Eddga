import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import './Header.css'

export default class CustomHeader extends Component {
  render() {
    return (
      <Header as={this.props.type} className="header">
        {this.props.children}
      </Header>
    )
  }
}
