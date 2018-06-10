import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addItem } from '../actions/index';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.addBtnClick = this.addBtnClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  addBtnClick(event) {
    event.preventDefault();
    this.props.addItem(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <div>
          <h3>
            Add Item
          </h3>
        </div>
        <div className="input-group">
          <input
            placeholder="Add ToDo item"
            className="form-control"
            id="city"
            value={ this.state.term }
            onChange={ this.onInputChange }
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" 
            onClick={ this.addBtnClick }>
              Add
            </button>
          </span>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem }, dispatch);
}

// export default SearchBar;
export default connect(null, mapDispatchToProps)(AddItem);
