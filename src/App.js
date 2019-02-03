import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <TodoList />
          <AddTodo />
        </main>
      </div>
    );
  }
}

export default App;
