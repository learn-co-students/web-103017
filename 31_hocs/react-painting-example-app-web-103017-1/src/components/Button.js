import React from 'react';
import withColor from './hocs/withColor';

const Button = props => {
  return (
    <div onClick={props.onClick} className={`ui ${props.color} button`}>
      {props.children}
      {props.text}
    </div>
  );
};

export default withColor(Button);
