import React, { Component } from 'react';
import Timer from './time'
import './App.css';


class App extends Component {
  state={
    ms:34243435
  }
  render() {
   
    return (
      <div className="App">
       <Timer />
      </div>
    );
  }
}

export default App;
