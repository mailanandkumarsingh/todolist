import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { editItem, deleteItem, completedItem } from '../actions/index';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  onEditClick(event) {
    event.preventDefault();
    this.props.editItem(this.props.data);
  }

  onDeleteClick(event) {
    event.preventDefault();
    this.props.deleteItem(this.props.data);
  }

  onComplete(event) {
    event.preventDefault();
    this.props.completedItem(this.props.data);
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6" >
            <p>
              <input type="checkbox" name="vehicle1" value="Bike" onClick={this.onComplete}/>
              {this.props.data}
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <button type="button" className="btn btn-primary" onClick={ this.onEditClick }>Edit</button>
              <button type="button" className="btn btn-danger" onClick={ this.onDeleteClick }>Delete</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

/*function mapStateToProps(state) {
  return {itemList: state.itemList}; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(ItemDetail) */

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editItem, deleteItem, completedItem }, dispatch);
}

// export default SearchBar;
export default connect(null, mapDispatchToProps)(ItemDetail);
