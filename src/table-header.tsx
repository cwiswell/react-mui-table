import * as React from 'react';
import { Fragment, Component } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HeaderClass from './headerClass';

//import styles from './styles.css'

export type Props = { options: Array<HeaderClass> }

export default class MuiTableHeader extends Component<Props> {

  _renderCells: any = () => {
    return this.props.options.map((item, key) => {
        return (<TableCell key={key}>
          {item.displayName}
        </TableCell>)
      }
    );
  }

  render() {
    let cells = this._renderCells();
    return (
      <Fragment>
        <TableHead>
          <TableRow>
            {cells}
          </TableRow>
        </TableHead>
      </Fragment>
    )
  }
}
