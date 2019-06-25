import { Input } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class CustomInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value || ''
    }
  }

  onChange = (event, data) => {
    this.setState({
      value: data.value
    })
    if (this.props.onChange) this.props.onChange(data.value, this.props.name)
  }

  render() {
    return (
      <Input
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.onChange}
        type={this.props.type}
        className={this.props.className}
      />
    )
  }
}
