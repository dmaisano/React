import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
      <div className="Todos">
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
