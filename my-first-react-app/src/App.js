import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [ personState, setPersonsState ] = useState({
        persons: [
            {name: 'Moses', age: 24},
            {name: 'Christy', age: 24},
            {name: 'Andre', age: 23},
        ]
    });

    const [otherState, setOtherState] = useState("Some other value");

    const switchNameHandler = () => {
        // console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0].name = "Amoses"
        setPersonsState({
            persons: [
                {name: 'Amoses', age: 24},
                {name: 'Christy', age: 24},
                {name: 'Andre', age: 29},
            ]
        })
    };

    return (
      <div className="App">
        <h1>Hi I'm Amoses</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}> My hobbies, reading DSM-V</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
};

export default app;