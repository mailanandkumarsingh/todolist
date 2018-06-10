import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import ItemDetail from '../components/itemDetail';

class ToDo extends Component {
  constructor(props) {
    super(props);
  }

  displayItem(item) {
    return(
      <ItemDetail key={item} data={item} />
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <tbody style={{ width: '100%' }}>
          <tr>
            <h3>Todo Items</h3>
          </tr>
          <tr style={{ width: '100%' }}>
            <td>
              {this.props && this.props.itemList && this.props.itemList.map(this.displayItem)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {itemList: state.itemList}; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(ToDo)