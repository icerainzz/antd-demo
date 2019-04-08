import React, { Component } from 'react';
import UserInput from './components/userinput';
import TodoList from './components/todolist';

import './App.css';



class App extends Component {
  state = {
    dataSource: [
      {
        id: 0,
        content: 'Get up',
        status: 'done'
      },
      {
        id: 1,
        content: 'Wash',
        status: 'done'
      },
      {
        id: 2,
        content: 'Go for work',
        status: 'todo'
      }
    ],
    inputValue: ''
  }
  
  render() {
    return (
      <div className="App">

        <h1>
          TODO LIST
        </h1>
        <UserInput></UserInput>
        <TodoList dataSource={this.state.dataSource} ></TodoList>

      </div>
    );
  }
}

export default App;