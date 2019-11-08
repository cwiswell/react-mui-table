import * as React from 'react';
import { Fragment } from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

type TableBodyProps = {
  data: Array<any>
}

const MuiTableBody: React.FC<TableBodyProps> = (props) => {

    const _renderCells: any = (item: Object) => {
        let cells: Array<any> = new Array<any>();
        Object.keys(item).forEach(property =>{cells.push((<TableCell key={property}>{item[property]} </TableCell>))});
        return cells;
    };

    const _renderRows: any = () => {
        return props.data.map((item, key) =>{
            var cells = _renderCells(item);
            return (<TableRow key={key}>
                {cells}
             </TableRow>)}
        ); 
    };

    let rows = _renderRows();

    return (
      <Fragment>
          <TableBody>
              {rows}
          </TableBody>
      </Fragment>
    );  
}

export default MuiTableBody;