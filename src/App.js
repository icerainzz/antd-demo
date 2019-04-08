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
        status: 'done',
        index:0
      },
      {
        id: 1,
        content: 'Wash',
        status: 'done',
        index:1
      },
      {
        id: 2,
        content: 'Go for work',
        status: 'todo',
        index: 2
      }
    ],
    inputValue: '',
    updateItemStatus: (index) => {
      const dataSource = [...this.state.dataSource]
      dataSource[index].status = dataSource[index].status === 'done' ? 'todo' : 'done'
      this.setState({
        dataSource
      })
    },
    delateItem: (index) => {
      const dataSource = [...this.state.dataSource]
      dataSource.splice(index,1)
      this.setState({
        dataSource
      })
    }
  }



  render() {
    return (
      <div className="App">

        <h1>
          TODO LIST
        </h1>
        <UserInput></UserInput>
        <TodoList dataSource={this.state.dataSource} updateItemStatus={this.state.updateItemStatus} delateItem={this.state.delateItem}   ></TodoList>

      </div>
    );
  }
}

export default App;