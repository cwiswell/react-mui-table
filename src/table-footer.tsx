import * as React from 'react';
import { Fragment } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

type MuiTableFooterProps = {
  count: number,
  rowsPerPage: number,
  currentPage: number,
  //Type the below functions appropriately
  handleChangePage: any,
  handleChangeRowsPerPage: any
}

const MuiTableFooter: React.FC<MuiTableFooterProps> = (props) => {
  return (
    <Fragment>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={3}
            count={props.count}
            rowsPerPage={props.rowsPerPage}
            page={props.currentPage}
            SelectProps={{
              native: true,
            }}
            onChangePage={props.handleChangePage}
            onChangeRowsPerPage={props.handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </Fragment>
  );
}

export default MuiTableFooter;
