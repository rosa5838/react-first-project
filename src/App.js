import React, { Component } from 'react';
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  render () {
    return (
    <div className="App">
      <Clock></Clock>
      <div>
        Login
      </div>

      <div>
        Post
      </div>
    </div>
    );
  }
}

export default App;