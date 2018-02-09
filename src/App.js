import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }
  setInput(value){
    console.log(typeof value)
    if(typeof value === "Number") {
      this.setState({value: value})
    }
  }

  render() {
    return (
      <input value={this.state.value} onChange={(e)=> {this.setInput(e.target.value)}}/>
    );
  }
}

export default App;
