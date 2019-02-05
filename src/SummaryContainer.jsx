import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Summary from "./Summary";
import { getCompletedTodos } from './todosReducer';

const SummaryContainer = props => <Summary {...props}/>

const mapStateToProps = state => ({
    todosCount: state.todos.length,
    completedTodosCount: getCompletedTodos(state).length
});

SummaryContainer.propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedTodosCount: PropTypes.number
}

export default connect(
    mapStateToProps,
    null
)(SummaryContainer);