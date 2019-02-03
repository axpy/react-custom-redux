import React, { Component } from 'react';
import { store } from '../store';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: store.getState().name,
      amount: store.getAmount(),
    }

    this.listener = () => {
      this.setState ({
        amount: store.getAmount()
      })
    }

    store.subscribe(this.listener)
  }

  render() {
    return (
      <div className="Header">
        <span>
            User name: {this.state.name}
        </span>
        <span>
            Todo amount: {this.state.amount}
        </span>
      </div>
    );
  }
}

export default Header;
