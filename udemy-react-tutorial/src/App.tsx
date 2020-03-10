import React, { useState } from 'react';
import { Person } from './Person/Person';

export const App: React.FC = () => {
  const [state, setState] = useState({
    persons: [
      {
        name: 'Finn',
        age: 17,
      },
      {
        name: 'Jake',
        age: 34,
      },
      {
        name: 'Fern',
        age: 17,
      },
    ],
    btnActive: false,
  });

  const switchNameHandler = () => {
    setState({
      ...state,
      btnActive: !state.btnActive,
    });
  };

  const nameChangedHandler = (
    event: React.FormEvent<HTMLInputElement>,
    personIndex: number
  ) => {
    const persons = state.persons.map((person, idx) => {
      if (idx === personIndex) {
        person.name = event.currentTarget.value;
      }

      return person;
    });

    setState({
      persons,
      ...state,
    });
  };

  const { persons, btnActive } = state;

  return (
    <div className="App">
      <p>Button active: {btnActive ? 'true' : 'false'}</p>
      <button onClick={switchNameHandler}>Toggle State</button>
      {persons.map((person, index) => (
        <Person
          {...person}
          key={index}
          index={index}
          click={switchNameHandler}
          nameChangedHandler={nameChangedHandler}
        />
      ))}
    </div>
  );
};

export default App;
