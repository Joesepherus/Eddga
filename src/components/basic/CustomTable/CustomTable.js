import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import moment from 'moment'

export default class CustomTable extends Component {
  render() {
    return (
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              {this.props.head.map(item => {
                return <Table.HeaderCell>{item.value}</Table.HeaderCell>
              })}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.body !== undefined &&
              this.props.body.reverse().map(item => {
                return (
                  <Table.Row>
                    {this.props.head.map(headItem => {
                      return (
                        <Table.Cell>
                          {headItem.name === 'date'
                            ? moment(item[headItem.name]).format(
                                'DD-MM-YYYY hh:mm:ss'
                              )
                            : item[headItem.name]}
                        </Table.Cell>
                      )
                    })}
                  </Table.Row>
                )
              })}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
