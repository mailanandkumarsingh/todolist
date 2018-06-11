import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { editItem, deleteItem, completedItem } from '../actions/index';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxStatus: false,
      buttonText: 'Edit'
    }
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.editContainer = this.editContainer.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
  }

  onEditClick(event) {
    event.preventDefault();
    console.log('What is the text --------------- ', event.target.value);
    if(this.state.buttonText === 'Edit') {
      this.setState({
        buttonText: 'Save'
      });
    } else {
      this.setState({
        buttonText: 'Edit'
      });
    }
    
  }

  onDeleteClick(event) {
    event.preventDefault();
    this.props.deleteItem(this.props.data);
  }

  onComplete(event) {
    event.preventDefault();
    this.props.completedItem(this.props.data);
    const pullStatus = this.state.checkBoxStatus;
    this.setState({
      checkBoxStatus: !pullStatus
    });
  }

  onEditChange(event) {
    console.log('TARGET _____ ', event.target.value);
    this.props.editItem(event.target.value);
  }


  editContainer() {
    console.log('-----> This props ----- >', this.props);
    if(this.props.strike) {
      return(
        <strike>{this.props.data}</strike>
      )
    } else {
      if(this.state.buttonText === 'Edit') {
        return (
          this.props.data
        );
      } else {
        return (
          <input type="text" name="edit" value={this.props.data} onChange={this.onEditChange}/>
        );
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6" >
            <p>
              <input type="checkbox" checked={this.state.checkBoxStatus} onClick={this.onComplete}/>
              {this.editContainer()}
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <button type="button" className="btn btn-primary" onClick={ this.onEditClick }>
                {this.state.buttonText}
              </button>
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
