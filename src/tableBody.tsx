import * as React from 'react';
import { Fragment, Component} from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

//import styles from './styles.css'

export type Props = {
  data: Array<any>
}

export default class MuiTableBody extends Component<Props> {

    _renderCells: any = (item: Object) => {
        return Object.keys(item).forEach(property =>{return (<TableCell>{item[property]} </TableCell>)});
    }

    _renderRows: any = () => {
        return this.props.data.map((item, key) =>{
            var cells = this._renderCells(item);
            return (<TableRow key={key}>
                {cells}
             </TableRow>)}
        ); 
    }

  render() {        
    let rows = this._renderRows();
    return (
      <Fragment>
          <TableBody>
              {rows}
          </TableBody>
      </Fragment>
    )
  }
}
