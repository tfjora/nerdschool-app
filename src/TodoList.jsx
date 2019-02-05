import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => (
    <div>
        {todos.map(todo => <TodoItem key={todo.id} id={todo.id} description={todo.description} />)}
    </div>
);

TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo))
};

TodoList.defaultProps = {
    todoItems: []
};

export default TodoList;