import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
  state = {
    value: 'here is a value'
  }

  render() {
    return (
      <div className="App">
        <input
          value={this.state.value}
          onChange={ev => this.setState({
            value: ev.target.value
          })}
        />
        <p>Length: {this.state.value.length}</p>
        <ValidationComponent
          length={this.state.value.length}
        />

        <p>
          Delete character:
          <span style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(3em, 1fr))',
          }}>
            {[...this.state.value].map((char, charIndex) => (
              <CharComponent
                character={char}
                deleteClick={() => {
                  let newValue = [...this.state.value];
                  newValue.splice(charIndex, 1);
                  this.setState({
                    value: newValue.join('')
                  });
                }}
              />
            ))}
          </span>
        </p>
        

        <hr />
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=&gt; ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=&gt; CharComponent) and style it as an inline box (=&gt; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
