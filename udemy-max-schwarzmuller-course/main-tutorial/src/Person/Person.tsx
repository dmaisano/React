import React from "react";
import styled from "styled-components";
// import "./Person.css";

interface Props {
  id: string;
  name: string;
  age: number;
  children?: any;
  click: () => void;
  changed: (event: React.FormEvent<HTMLInputElement>, personID: string) => void;
}

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person: React.FC<Props> = (props: Props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} years old
      </p>
      <input
        type="text"
        onChange={(e) => props.changed(e, props.id)}
        value={props.name}
      />
    </StyledDiv>
  );
};

export default Person;
