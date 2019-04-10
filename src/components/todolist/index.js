import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import TodoItem from './../todoitem';


class TodoList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.dataSource.map((item,index) => {
                        return <TodoItem item={item} key={item.id} index={index} updateItemStatus={this.props.updateItemStatus} delateItem={this.props.delateItem}/>
                    })
                }
            </div>
        );
    }
}

export default TodoList;