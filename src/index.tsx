import * as React from 'react';
import { Fragment, Component} from 'react';

import Table from '@material-ui/core/Table';
import MuiTableHeader from './tableHeader';
import MuiTableFooter from './tableFooter';
import MuiTableBody from './tableBody';

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
          <MuiTableBody data={data} />
          <MuiTableFooter count={data.length} rowsPerPage={30} currentPage={1}
            handleChangePage={() => { }}
            handleChangeRowsPerPage={() => { }} />
        </Table>
      </Fragment>
    )
  }
}
