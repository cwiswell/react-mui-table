import * as React from 'react';
import { Fragment, Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import MuiTableHeader from './tableHeader';
import MuiTableFooter from './tableFooter';

//import styles from './styles.css'

export type Props = {
  dense: boolean,
  data: Array<any>
}

export default class MuiTable extends Component<Props> {
  render() {
    const {
      data,
      dense
    } = this.props

    return (
      <Fragment>
        <Table {...(dense ? {padding:"dense"} : {})}>
          <MuiTableHeader data={"data"} />
          <TableBody>
            <TableRow>
              <TableCell>
              </TableCell>
            </TableRow>
          </TableBody>
          <MuiTableFooter count={data.length} rowsPerPage={30} currentPage={1}
            handleChangePage={() => { }}
            handleChangeRowsPerPage={() => { }} />
        </Table>
      </Fragment>
    )
  }
}
