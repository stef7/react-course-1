import React, { Component } from 'react';
import './CharComponent.css';

class CharComponent extends Component {
  render() {
    return (
      <button
        className="CharComponent"
        onClick={this.props.deleteClick}
      >
        {this.props.character}
      </button>
    );
  }
}

export default CharComponent;
