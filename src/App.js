import React, { Component } from 'react';
import Timer from './components/Timer';
import './App.css';

export default class App extends Component {
  state={
    time:0
  }

handelTime=(ms)=>{
  this.setState({
    time:ms
  })
}





  render() {
    return (
      <div>
        <Timer handelTime={this.handelTime} />
      </div>
    )
  }
}

