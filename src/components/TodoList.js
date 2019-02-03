import React, { Component } from 'react';
import './TodoList.css';
import { store, removeTodo } from '../store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: store.getState().todoList,
    }

    this.listener = state => {
      this.setState({
        todoList: state.todoList
      })
    }

    store.subscribe(this.listener)
  }

  removeTodo(id) {
    store.dispatch(removeTodo(id));
  }
  
  render() {
    return (
      <div className="TodoList">
        <ul className="list">
          { this.state.todoList.map((todo, i) => <li className="list_item" key={ todo.id } onClick={() => this.removeTodo(todo.id)}>{ todo.title }</li>) }
        </ul>
      </div>
    );
  }
}

export default TodoList;