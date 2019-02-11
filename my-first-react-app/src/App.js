import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Moses', age: 24},
            {name: 'Christy', age: 24},
            {name: 'Andre', age: 23},
        ]
    };

    switchNameHandler = () => {
        // console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0].name = "Amoses"
        this.setState({
            persons: [
                {name: 'Amoses', age: 24},
                {name: 'Christy', age: 24},
                {name: 'Andre', age: 29},
            ]
        })
    };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm Amoses</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies, reading DSM-V</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
