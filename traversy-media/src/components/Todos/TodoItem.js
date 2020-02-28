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

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            style={{ marginRight: '10px' }}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

TodoItem.propTypes = {
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
