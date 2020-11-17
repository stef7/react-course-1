import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '480px',
    }
  };

  return (
    <div className="Person" style={style}>
      <p>
        I'm {props.name} and I am {props.age} years old!
        <span
          onClick={props.deleteHandler}
        > Delete</span>
      </p>
      {props.children && (
        <p>
          {props.children}
        </p>
      )}
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  )
};

export default Radium(person);
