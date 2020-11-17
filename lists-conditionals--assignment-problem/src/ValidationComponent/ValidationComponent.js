import React, { Component } from 'react';

class ValidationComponent extends Component {
  render() {
    return (
      <p
        className="ValidationComponent"
      >
        {this.props.length < 5 ? (
          'Text too short'
        ) : (
          'Text long enough'
        )}
      </p>
    );
  }
}

export default ValidationComponent;
