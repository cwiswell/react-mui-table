import * as React from 'react';
import { Fragment, Component} from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

export type Props = { 
    count: number ,
    rowsPerPage: number,
    currentPage: number,
    //Type the below functions appropriately
    handleChangePage: any,
    handleChangeRowsPerPage: any
}

export default class MuiTableFooter extends Component<Props> {
  render() {
    const {
      count,
      rowsPerPage,
      currentPage,
      handleChangePage,
      handleChangeRowsPerPage
    } = this.props

    return (
      <Fragment>        
        <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={count}
                rowsPerPage={rowsPerPage}
                page={currentPage}
                SelectProps={{
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
      </Fragment>
    )
  }
}
