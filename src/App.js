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
        index: 0
      },
      {
        id: 1,
        content: 'Wash',
        status: 'done',
        index: 1
      },
      {
        id: 2,
        content: 'Go for work',
        status: 'todo',
        index: 2
      }
    ],
    statusNow: 'all',
    status: {
      all: 'all',
      done: 'done',
      todo: 'todo'
    },
    inputValue: '',
    updateItemStatus: (index) => {
      let dataSource = [...this.state.dataSource]
      dataSource[index].status = dataSource[index].status === 'done' ? 'todo' : 'done'
      this.setState({
        dataSource
      })
    },
    delateItem: (index) => {
      let dataSource = [...this.state.dataSource]
      dataSource.splice(index, 1)
      this.setState({
        dataSource
      })
    },
    updateinput: (e) => {
      this.setState({
        inputValue: e.target.value
      })
    },
    addItem: () => {
      if (this.state.inputValue) {
        let newItem = {
          id: new Date().getTime(),
          content: this.state.inputValue,
          index: (this.state.dataSource.length) - 1,
          status: 'todo',
        }
        let dataSource = [...this.state.dataSource]
        let inputValue = ''
        dataSource.push(newItem)
        this.setState({
          dataSource, inputValue

        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          TODO LIST
        </h1>
        <div>
         
        </div>
        <UserInput updateinput={this.state.updateinput} addItem={this.state.addItem} inputValue={this.state.inputValue}    ></UserInput>
        <TodoList dataSource={this.state.dataSource} updateItemStatus={this.state.updateItemStatus} delateItem={this.state.delateItem}   ></TodoList>
      </div>
    );
  }
}

export default App;