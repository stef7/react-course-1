import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
  return (
    <span className="UserOutput">
      {props.username}
    </span>
  )
}

export default UserOutput;