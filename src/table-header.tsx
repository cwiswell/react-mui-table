import * as React from 'react';
import { Fragment, Component} from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//import styles from './styles.css'

export type Props = { data: any }

export default class MuiTableHeader extends Component<Props> {
  render() {
    const {
      data
    } = this.props

    return (
      <Fragment>
        <TableHead>
          <TableRow>
            <TableCell>
              {data}
            </TableCell>
            <TableCell>
              {data}
            </TableCell>
          </TableRow>
        </TableHead>
      </Fragment>
    )
  }
}
