import * as React from 'react';
import { Fragment } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HeaderClass from './headerClass';

//import styles from './styles.css'

type Props = { options: Array<HeaderClass> }

const MuiTableHeader: React.FC<Props> = (props) => {
  const _renderCells: any = () => {
    return props.options.map((item, key) => {
      return (<TableCell key={key}>
        {item.displayName}
      </TableCell>)
    });
  }

  let cells = _renderCells();
  return (
    <Fragment>
      <TableHead>
        <TableRow>
          {cells}
        </TableRow>
      </TableHead>
    </Fragment>
  );

}
export default MuiTableHeader