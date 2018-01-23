import React from 'react';

const Button = props => {
  return (
    <div onClick={props.onClick} className={`ui ${props.color} button`}>
      {props.children}
      {props.text}
    </div>
  );
};

export default Button;
