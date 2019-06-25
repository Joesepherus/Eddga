import React, { Component } from 'react'
import CustomInput from '../basic/CustomInput/CustomInput'
import CustomButton from '../basic/CustomButton/CustomButton'
import './RegisterScreen.css'
import CustomHeader from '../basic/CustomHeader/CustomHeader'
import { observer, inject } from 'mobx-react'
import { redirect } from '../../global/global'
import { Link } from 'react-router-dom'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  login = async () => {
    let res = await this.props.store.login(
      this.state.email,
      this.state.password
    )
    if (res !== null) redirect('/dashboard', this.props.history)
  }

  onChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="layoutCenter">
        <CustomHeader type="h1">Prihlásenie</CustomHeader>
        <div className="registerForm">
          <CustomInput
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.onChange}
            className="registerInput"
          />
          <CustomInput
            placeholder="heslo"
            value={this.state.password}
            name="password"
            onChange={this.onChange}
            className="registerInput"
            type="password"
          />
          <CustomButton onClick={this.login} color="blue">
            Prihlásiť sa
          </CustomButton>
          <div>
            <Link to="/register">Registruj sa</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default inject('store')(observer(LoginScreen))
