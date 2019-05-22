import React, { Component } from 'react'

import MuiTable from 'react-mui-table'

export default class App extends Component {
  render () {
    return (
      <div>
        <MuiTable data={"stuff"} />
      </div>
    )
  }
}
