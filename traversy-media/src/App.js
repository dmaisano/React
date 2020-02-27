import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Call insurance company',
        completed: false,
      },
      {
        id: 2,
        title: 'Read daily emails',
        completed: false,
      },
      {
        id: 3,
        title: 'Be awesome',
        completed: true,
      },
    ],
  };

  componentDidMount() {
    console.log(this.state.todos);
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
