import React, { Component } from 'react';

const inputStyles = {
  display: 'block',
  width: '50%',
  margin: '1em auto',
  border: '2px solid currentColor',
};

class UserInput extends Component {
  render() {
    return (
      <input
        value={this.props.username}
        onChange={this.props.onChange}
        style={inputStyles}
      />
    )
  }
}

export default UserInput;