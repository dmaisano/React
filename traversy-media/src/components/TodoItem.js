import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    const isCompleted = this.props.todo.completed;
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: isCompleted ? 'line-through' : 'none',
    };
  };

  markComplete = () => {
    console.log(this.props.todo);

    this.props.todo.completed = !this.props.todo.completed;
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            style={{ marginRight: '10px' }}
            onChange={this.markComplete}
          />
          {title}
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
