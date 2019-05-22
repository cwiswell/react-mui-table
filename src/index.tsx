import * as React from 'react'

import styles from './styles.css'

export type Props = { data: string }

export default class MuiTable extends React.Component<Props> {
  render() {
    const {
      data
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {data}
      </div>
    )
  }
}
