import React, { Component } from 'react'
import CustomHeader from '../basic/CustomHeader/CustomHeader'
import CustomText from '../basic/CustomText/CustomText'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

class ErrorScreen extends Component {
  render() {
    return (
      <div className="layoutCenter">
        <CustomHeader type="h1">Stránka nebola nájdena.</CustomHeader>
        <CustomText>
          Vrátiť sa naspäť na{' '}
          {this.props.store.loggedIn === true ? (
            <Link to="/dashboard">domovskú stránku</Link>
          ) : (
            <Link to="/login">prihlásenie</Link>
          )}
          .
        </CustomText>
      </div>
    )
  }
}

export default inject('store')(observer(ErrorScreen))
