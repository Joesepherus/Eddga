import React, { Component } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

export default class CustomLineChart extends Component {
  render() {
    return (
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' }
          }}
          data={this.props.data}
        />
      </VictoryChart>
    )
  }
}
