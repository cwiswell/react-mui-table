import React, { Component } from 'react'

import MuiTable from 'react-mui-table'

export default class App extends Component {
  render () {
    let exampleData = [
        {col1: "data1", col2: "data12"},
        {col1: "data2", col2: "data13"},
        {col1: "data3", col2: "data15"},
        {col1: "data4", col2: "data126"},
        {col1: "data5", col2: "data127"},
        {col1: "data6", col2: "data128"}
      ];

    return (
      <div>
        <MuiTable data={exampleData} dense={true} />
      </div>
    )
  }
}
