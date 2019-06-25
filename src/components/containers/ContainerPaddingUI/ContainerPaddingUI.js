import React, { Component } from 'react'
import './ContainerPaddingUI.scss'
import { Grid } from 'semantic-ui-react'

export default class ContainerPaddingUI extends Component {
  render() {
    const { children } = this.props
    return (
      <Grid
        stackable
        columns={3}
        className={
          this.props.className
            ? this.props.className + ' contentPaddingUI'
            : 'contentPaddingUI'
        }
      >
        {children}
      </Grid>
    )
  }
}
