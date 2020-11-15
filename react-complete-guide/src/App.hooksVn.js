import React, { useState } from "react";
import "./App.css";
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29, hobbies: [
        'Racing'
      ] },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
  });

  const [ otherState, setOtherState ] = useState('some other value');

  console.log({ personsState, otherState });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 27 },
        { name: 'Manu', age: 29, hobbies: [
          'Racing'
        ] },
        { name: 'Stephanie', age: 26 },
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>

      <button onClick={switchNameHandler}>Switch name</button>

      {personsState.persons.map(person => (
        <Person name={person.name} age={person.age}>
          {person.hobbies && (
            <React.Fragment>
              My hobbies: {person.hobbies.join(', ')}
            </React.Fragment>
          )}
        </Person>
      ))}
    </div>
  );
}

export default app;

/*
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29, hobbies: [
        'Racing'
      ] },
      { name: 'Stephanie', age: 26 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 27 },
        { name: 'Manu', age: 29, hobbies: [
          'Racing'
        ] },
        { name: 'Stephanie', age: 26 },
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button onClick={
          this.switchNameHandler
        }>Switch name</button>

        {this.state.persons.map(person => (
          <Person name={person.name} age={person.age}>
            {person.hobbies && (
              <React.Fragment>
                My hobbies: {person.hobbies.join(', ')}
              </React.Fragment>
            )}
          </Person>
        ))}
      </div>
    );
  };
}
*/
