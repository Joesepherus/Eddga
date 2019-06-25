import {
  Container,
  Button,
  lightColors,
  darkColors
} from 'react-floating-action-button'
import React, { Component } from 'react'
import CustomIcon from '../CustomIcon/CustomIcon'

export default class CustomFAB extends Component {
  render() {
    return (
      <Container>
        <Button
          tooltip="Pridaj nového pacienta"
          // icon={<CustomIcon />}
          styles={{
            backgroundColor: darkColors.lightBlue,
            color: lightColors.white
          }}
          onClick={this.props.onClick}
        >
          <CustomIcon color="white" icon={this.props.icon} size={1.5} />
        </Button>
      </Container>
    )
  }
}
