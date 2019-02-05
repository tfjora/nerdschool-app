import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTodo } from "./todoAction";
import AddTodo from "./AddTodo";

const AddTodoContainer = ({ createTodoFn }) => <AddTodo createTodoFn={createTodoFn} />;

AddTodoContainer.propTypes = {
    createTodoFn: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    createTodoFn: description => dispatch(createTodo(description))
});

AddTodoContainer.propTypes = {
    createTodoFn: PropTypes.func.isRequired
};

export default connect (
    null, 
    mapDispatchToProps
)(AddTodoContainer);