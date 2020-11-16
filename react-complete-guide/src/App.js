import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29, hobbies: [
        'Racing'
      ] },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];

    const personIndex = persons.findIndex(person => person.id === personId);

    const person = {
      ...persons[personIndex]
    };

    person.name = event.target.value;

    persons[personIndex] = person;

    this.setState({
      persons
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

    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, personIndex) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          deleteHandler={() => this.deletePersonHandler(personIndex)}
          changed={event => this.nameChangedHandler(event, person.id)}
         >
          {person.hobbies && (
            <React.Fragment>
              My hobbies: {person.hobbies.join(', ')}
            </React.Fragment>
          )}
        </Person>
      ));
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Show/hide persons
        </button>

        {persons}
      </div>
    );
  };
}

export default App;
