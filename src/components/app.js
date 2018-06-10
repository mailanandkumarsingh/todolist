import React, { Component } from 'react';
import AddItem from '../containers/add_item';
import Completed from '../containers/completed_item';
import ToDo from '../containers/todo_item';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddItem />
        <ToDo />
        <Completed />
      </div>
    );
  }
}
