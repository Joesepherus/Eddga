import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ErrorScreen from './components/screens/ErrorScreen'
import { observer, inject } from 'mobx-react'
import CustomToast from './components/basic/CustomToast/CustomToast'
import ScreensContainer from './components/containers/ScreensContainer/ScreensContainer'
import history from './history'

class CustomRouter extends Component {
  componentDidMount() {
    if (this.isLogged()) {
      this.props.store.setLoggedIn(true)
      this.props.store.getAdmin(localStorage.getItem('id'))
    }
  }

  isLogged() {
    return localStorage.getItem('logged') === 'true'
  }

  render() {
    return (
      <div>
        <Router history={history}>
          {/* {this.props.store.loggedIn ? ( */}
          <ScreensContainer />
          {/* // ) : (
          //   <Switch>
          //     <Route exact path="/" component={LoginScreen} />
          //     <Route path="/login" component={LoginScreen} />
          //     <Route path="/register" component={RegisterScreen} />
          //     <Route path="*" component={ErrorScreen} />
          //   </Switch>
          // )} */}
        </Router>
        <CustomToast />
      </div>
    )
  }
}

export default inject('store')(observer(CustomRouter))
