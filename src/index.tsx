import * as React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import MuiTableHeader from './tableHeader';
import MuiTableFooter from './tableFooter';

//import styles from './styles.css'

export type Props = { data: string }

export default class MuiTable extends React.Component<Props> {
  render() {
    const {
      data
    } = this.props

    return (
      <Table>
        <MuiTableHeader data={data}/>
        <TableBody>
            <TableRow>
              <TableCell>
                {data}
              </TableCell>
            </TableRow>
        </TableBody>
        <MuiTableFooter count={300} rowsPerPage={30} currentPage={1} 
                        handleChangePage={()=>{}} 
                        handleChangeRowsPerPage={()=>{}} />
      </Table>
    )
  }
}
