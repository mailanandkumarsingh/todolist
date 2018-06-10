import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import ItemDetail from '../components/itemDetail';

class Completed extends Component {
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
            <h3>Completed Items</h3>
          </tr>
          <tr style={{ width: '100%' }}>
            <td>
              {this.props && this.props.completeList && this.props.completeList.map(this.displayItem)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  console.log('What is the state  in Completed ----> ', state);
  return {completeList: state.completeList}; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(Completed)
