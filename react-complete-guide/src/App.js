import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Manu', age: 29, hobbies: [
          'Racing'
        ] },
        { name: 'Stephanie', age: 26 },
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 27 },
        { name: event.target.value, age: 29, hobbies: [
          'Racing'
        ] },
        { name: 'Stephanie', age: 26 },
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '0.1em solid blue',
      borderRadius: '0.2em',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button onClick={
          () => this.switchNameHandler('Maximilian!!')
        }
        style={style}
        >Switch name</button>

        {this.state.persons.map(person => (
          <Person
            name={person.name}
            age={person.age}
            click={() => this.switchNameHandler('Max!')}
            changed={this.nameChangedHandler}
           >
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

export default App;
