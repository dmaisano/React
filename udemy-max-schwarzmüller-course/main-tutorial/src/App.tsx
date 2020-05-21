import React, { useState } from "react";
import { Person } from "./Person/Person";
import "./App.css";

export const App: React.FC = () => {
  const [state, setState] = useState({
    persons: [
      {
        name: "Finn",
        age: 17,
      },
      {
        name: "Jake",
        age: 34,
      },
      {
        name: "Fern",
        age: 17,
      },
    ],
    otherState: "some text",
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
    personIndex: number,
  ) => {
    const persons = state.persons.map((person, idx) => {
      if (idx === personIndex) {
        person.name = event.currentTarget.value;
      }

      return person;
    });

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
        key={index}
        index={index}
        click={() => deletePersonHandler(index)}
        changed={nameChangedHandler}
      />
    ));
  }

  return (
    <div className="App">
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
};

export default App;
