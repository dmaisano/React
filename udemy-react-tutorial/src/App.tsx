import React, { Component } from 'react';
import { Person, PersonProps } from './Person/Person';

export class App extends Component {
  state: {
    persons: PersonProps[];
  } = {
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
  };

  render() {
    const { persons } = this.state;

    return (
      <div className="App">
        {persons.map((person) => (
          <Person {...person} />
        ))}
      </div>
    );
  }
}

export default App;
