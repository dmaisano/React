import React from 'react';
import './Person.css';

interface Props {
  index: number;
  name: string;
  age: number;
  children?: any;
  click: () => void;
  nameChangedHandler: (
    event: React.FormEvent<HTMLInputElement>,
    personIndex: number
  ) => void;
}

export const Person: React.FC<Props> = (props: Props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} years old
      </p>
      <input
        type="text"
        onChange={(e) => props.nameChangedHandler(e, props.index)}
        value={props.name}
      />
    </div>
  );
};
