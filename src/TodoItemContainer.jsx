import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo, toggleTodo } from "./todoAction"; 

const TodoItemContainer = props => <TodoItem {...props} />

const mapDispatchToProps = dispatch => ({
    deleteTodoFn: id => dispatch(deleteTodo(id)),
    toggleTodoFn: id => dispatch(toggleTodo(id))
});

TodoItemContainer.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    deleteTodoFn: PropTypes.func.isRequired,
    toggleTodoFn: PropTypes.func.isRequired
}

export default connect(
    null,
    mapDispatchToProps
)(TodoItemContainer)