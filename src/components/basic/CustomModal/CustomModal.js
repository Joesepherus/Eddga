import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

export default class CustomModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Modal
          size="mini"
          open={this.props.open}
          onClose={this.props.toggleModal}
        >
          <Modal.Header>{this.props.header}</Modal.Header>
          <Modal.Content>
            <p>{this.props.body}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.props.decline}>
              Nie
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Ano"
              onClick={this.props.accept}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
