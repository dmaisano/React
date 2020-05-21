import React, { useState } from "react";
import { Person } from "./Person/Person";
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
  }

  return (
    <div className="App">
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
};

export default App;
