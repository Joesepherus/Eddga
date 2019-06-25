import React from 'react'
import { Select } from 'semantic-ui-react'

class CustomSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Select
        placeholder="Vyberte"
        options={this.props.selectOptions}
        onChange={this.props.onChange}
      />
    )
  }
}

export default CustomSelect
