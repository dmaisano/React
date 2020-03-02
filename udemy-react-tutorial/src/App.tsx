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

  const { persons, btnActive } = state;

  return (
    <div className="App">
      <p>Button active: {btnActive ? 'true' : 'false'}</p>
      <button onClick={switchNameHandler}>Toggle State</button>
      {persons.map((person) => (
        <Person {...person} />
      ))}
    </div>
  );
};

export default App;
