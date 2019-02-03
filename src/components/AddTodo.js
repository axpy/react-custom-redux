import React, { Component } from 'react';
import { store, addTodo } from '../store';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  render() {
    return (
      <div className="AddTodo">
        <input value={this.state.inputValue} onChange={(e) => this.updateInput(e)} type="text" placeholder="todo name" ></input>
        <button onClick={() => this.addTodo(this.state.inputValue)}>Add todo</button>  
      </div>
    );
  }

  updateInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addTodo(todo) {
    if (!todo) return;
    store.dispatch(addTodo(todo));
    this.setState({
      inputValue: ''
    })
  }
}

export default AddTodo;
