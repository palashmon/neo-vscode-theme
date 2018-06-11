import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
    toggleAllTodo: PropTypes.func
  };
  state = {
    childTodos: this.props.todos
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ childTodos: nextProps.todos });
  }

  /**
   * This method is used to toggle the selected todo item 'completed' status
   */
  toggle(todoToToggle) {
    let todoCopy = JSON.parse(JSON.stringify(this.state.childTodos));
    let found = todoCopy.find(v => v.id === todoToToggle.id);
    if (found) {
      found.completed = !todoToToggle.completed;
      this.setState({ childTodos: todoCopy });
    }
  }

  render() {
    const { childTodos } = this.state;

    let todoItems = [];
    childTodos.map(todo => {
      let view = this.renderTodoItem(todo);
      if (!view) return;
      todoItems.push(view);
    }, this);

    let activeTodoCount = childTodos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);
    let toggleAllButton;

    if (childTodos.length > 0) {
      toggleAllButton = (
        <input
          className="toggle-all"
          type="checkbox"
          onChange={this.props.toggleAllTodo.bind(this)}
          checked={activeTodoCount === 0}
        />
      );
    }

    let fullList = (
      <section className="main">
        {toggleAllButton}
        <ul className="todo-list">{todoItems}</ul>
      </section>
    );
    return fullList;
  }
}

export default TodoList;
