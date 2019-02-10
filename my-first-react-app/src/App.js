import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm Amoses</h1>
        <Person name="Moses" age="24"/>
        <Person name="Christy" age="24"> My hobbies, reading DSM-5</Person>
        <Person name="Andre" age="23"/>
      </div>
    );
  }
}

export default App;
