import React from "react";
import Radium from "radium";
import "./Person.css";

interface Props {
  id: string;
  name: string;
  age: number;
  children?: any;
  click: () => void;
  changed: (event: React.FormEvent<HTMLInputElement>, personID: string) => void;
}

const style: Radium.StyleRules = {
  "@media (min-width: 500px)": {
    width: "450px",
  },
};

const Person: React.FC<Props> = (props: Props) => {
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} years old
      </p>
      <input
        type="text"
        onChange={(e) => props.changed(e, props.id)}
        value={props.name}
      />
    </div>
  );
};

export default Radium(Person);
