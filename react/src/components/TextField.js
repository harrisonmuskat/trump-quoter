import React, { Component } from 'react';

const TextField = (props) => {
  return (
    <label> {props.label}
      <props.type
        name={props.name}
        onChange={props.handlerFunction}
        type="text"
        value={props.content}
      />
    </label>
  );
}

export default TextField;
