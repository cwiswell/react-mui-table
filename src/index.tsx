import * as React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//import styles from './styles.css'

export type Props = { data: string }

export default class MuiTable extends React.Component<Props> {
  render() {
    const {
      data
    } = this.props

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Temp Data
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>
                {data}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    )
  }
}
