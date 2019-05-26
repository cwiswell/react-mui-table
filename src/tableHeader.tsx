import * as React from 'react';
import { Fragment, Component} from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//import styles from './styles.css'

export type Props = { data: string }

export default class TableHeader extends Component<Props> {
  render() {
    const {
      data
    } = this.props

    return (
      <Fragment>
        <TableHead>
          <TableRow>
            <TableCell>
              Temp Data
            </TableCell>
          </TableRow>
        </TableHead>
      </Fragment>
    )
  }
}
