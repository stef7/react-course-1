import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 1em auto;
  border: 2px solid #ccc;
  border-radius: 0.4em;
  box-shadow: 0 0.2em 0.3em #ddd;
  padding: 1em;
  @media (min-width: 500px) {
    background: lightyellow;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
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
    </StyledDiv>
  )
};

export default person;
