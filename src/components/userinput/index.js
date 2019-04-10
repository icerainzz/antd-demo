import React, { Component } from 'react';
import './index.css';

class UserInput extends Component {
    updateinput = (e) => {
        this.props.updateinput(e)
    }
    addItem = () => {
        this.props.addItem()
    }


    render() {
        return (
            <div>
                 <input type="text" 
                 value={
                     this.props.inputValue
                 }
                 onChange={this.updateinput}
                 />
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }
}

export default UserInput;