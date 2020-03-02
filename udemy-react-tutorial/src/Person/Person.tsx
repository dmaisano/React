import React from 'react';

interface Props {
  name: string;
  age: number;
  children?: any;
}

export const Person: React.FC<Props> = (props: Props) => {
  return (
    <p>
      My name is {props.name} and I am {props.age} years old
      <div>{JSON.stringify(props.children)}</div>
    </p>
  );
};
