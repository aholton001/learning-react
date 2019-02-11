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

    switchNameHandler = (newName) => {
        // console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0].name = "Amoses"
        this.setState({
            persons: [
                {name: newName, age: 24},
                {name: 'Christy', age: 24},
                {name: 'Andre', age: 29},
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Moses', age: 24},
                {name: event.target.value, age: 24},
                {name: 'Andre', age: 29},
            ]
        })
    };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm Amoses</h1>
        <button onClick={() => this.switchNameHandler("Amoses")}>Switch Name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Mo")}
            changed={this.nameChangeHandler}> My hobbies, reading DSM-V</Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
