import React, { useState } from "react";
import Person from "./Person/Person";
import Radium from "radium";
import "./App.css";

export const App: React.FC = () => {
  const [state, setState] = useState({
    persons: [
      {
        id: "372541a5-ff73-407a-a540-9d7afd034283",
        name: "Finn",
        age: 17,
      },
      {
        id: "5ee56e45-1f4a-440d-beba-8f09bd84a1bf",
        name: "Jake",
        age: 34,
      },
      {
        id: "b87efbbc-ec03-4e67-b42b-86644704c16a",
        name: "Fern",
        age: 17,
      },
    ],
    showPersons: false,
  });

  const deletePersonHandler = (personIndex: number) => {
    const persons = [...state.persons];

    // remove the person from the array
    persons.splice(personIndex, 1);

    setState({
      ...state,
      persons,
    });
  };

  const togglePersonsHandler = () => {
    setState({
      ...state,
      showPersons: !state.showPersons,
    });
  };

  const nameChangedHandler = (
    event: React.FormEvent<HTMLInputElement>,
    personID: string,
  ) => {
    const personIndex = state.persons.findIndex((person) => {
      return person.id === personID;
    });

    const person = { ...state.persons[personIndex] };

    person.name = event.currentTarget.value;

    const persons = [...state.persons];
    persons[personIndex] = person;

    setState({
      ...state,
      persons,
    });
  };

  let persons: JSX.Element[] = [];

  if (state.showPersons) {
    persons = state.persons.map((person, index) => (
      <Person
        {...person}
        key={person.id}
        click={() => deletePersonHandler(index)}
        changed={nameChangedHandler}
      />
    ));

    styles.backgroundColor = "red";
    styles[":hover"].backgroundColor = "#F96D80";
  }

  const classes: string[] = [];

  if (state.persons.length <= 2) {
    classes.push("red");
  }

  if (state.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <p className={classes.join(" ")}>Some Text</p>
      <button style={styles} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};

const styles = {
  backgroundColor: "green",
  color: "white",
  font: "inherit",
  border: "1px solid blue",
  padding: "0.5rem",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "lightgreen",
    color: "black",
  },
};

export default Radium(App);
