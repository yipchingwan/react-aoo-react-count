import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number : 0}
  add = ()=>{
    this.setState({number:this.state.number+1})
  }
  sub = ()=>{
    this.setState({number:this.state.number-1})
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        {this.state.number}
        <button onClick={this.sub}>-</button>
        
      </div>
    );
  }
}

export default App;
