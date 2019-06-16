import React, { Component } from 'react'
import CustomRouter from './Router'
import { Provider } from 'mobx-react'
import store from './stores/store'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <CustomRouter />
        </Provider>
      </div>
    )
  }
}

export default App
