import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';

class TodoItem extends Component {

    updateStatus=()=>{
        
    }

    render() {
        return (
            <li className={'ToDoItem' + (this.props.item.status === 'done' ? ' ToDoItem-done' : '')}>
             <span className="content">
                 {
                        this.props.item.content
                 }
             </span>
             <span className='close'>x</span>


            </li>
        );
    }
}

export default TodoItem;