import * as React from 'react';
import { Fragment, Component} from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

//import styles from './styles.css'

export type Props = {
  data: Array<any>
}

export default class MuiTable extends Component<Props> {
  render() {
    const {
      data
    } = this.props

    return (
      <Fragment>
          <TableBody>
            <TableRow>
              <TableCell>{data}
              </TableCell>
            </TableRow>
          </TableBody>
      </Fragment>
    )
  }
}
