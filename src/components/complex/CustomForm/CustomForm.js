import React from 'react'
import { Form } from 'semantic-ui-react'
import CustomInput from '../../basic/CustomInput/CustomInput'
import './CustomForm.css'

class CustomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderItem = item => {
    switch (item.type) {
      case 'input':
        return (
          <Form.Field>
            <label className="label">{item.label}</label>
            <CustomInput
              placeholder={item.placeholder}
              value={this.props[item.name]}
              name={item.name}
              onChange={this.props.onChange}
              className="registerInput"
            />
          </Form.Field>
        )
      default:
        return
    }
  }

  render() {
    return (
      <Form className={'form' + this.props.className}>
        {this.props.data.map(item => {
          return this.renderItem(item)
        })}
      </Form>
    )
  }
}

export default CustomForm
