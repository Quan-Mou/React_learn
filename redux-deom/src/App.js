import React, { PureComponent } from 'react';
import ToDoList from './ToDoList';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <ToDoList></ToDoList>
      </>
    );
  }
}
