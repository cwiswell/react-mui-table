import * as React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHeader from './tableHeader';

//import styles from './styles.css'

export type Props = { data: string }

export default class MuiTable extends React.Component<Props> {
  render() {
    const {
      data
    } = this.props

    return (
      <Table>
        <TableHeader data={data}/>
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
