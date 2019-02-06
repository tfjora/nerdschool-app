import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTodo } from "./todoAction";
import { getNextId } from './todosReducer';
import AddTodo from "./AddTodo";

const AddTodoContainer = props => <AddTodo {...props} />;

const mapStateToProps = state => ({
    nextId: getNextId(state)
})

const mapDispatchToProps = dispatch => ({
    createTodoFn: (id, description) => dispatch(createTodo(id, description))
});

AddTodoContainer.propTypes = {
    nextId: PropTypes.number.isRequired,
    createTodoFn: PropTypes.func.isRequired
};

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(AddTodoContainer);