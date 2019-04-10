import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';

class TodoItem extends Component {
    updateItemStatus = () => {
        this.props.updateItemStatus(this.props.index)
    }

    delateItem = () => {
        this.props.delateItem(this.props.index)
    }
    render() {
        return (
            <li className={'ToDoItem' + (this.props.item.status === 'done' ? ' ToDoItem-done' : '')}>
                <span className="content" onClick={this.updateItemStatus}>
                    {
                        this.props.item.content
                    }
                </span>
                <span className='close' onClick={this.delateItem}>x</span>


            </li>
        );
    }
}

export default TodoItem;