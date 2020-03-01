import React from 'react';

export interface PersonProps {
  name: string;
  age: number;
  children?: any;
}

export const Person: React.FC<PersonProps> = (props: PersonProps) => {
  return (
    <p>
      My name is {props.name} and I am {props.age} years old
      <div>{JSON.stringify(props.children)}</div>
    </p>
  );
};
