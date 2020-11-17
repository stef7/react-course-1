import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '0.1em solid blue',
      borderRadius: '0.2em',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p
            className={classes.join(' ')}
          >This is really working!</p>

          <button
            onClick={this.togglePersonsHandler}
            style={style}
          >
            Show/hide persons
          </button>

          {persons}
        </div>
      </StyleRoot>
    );
  };
}

export default Radium(App);
