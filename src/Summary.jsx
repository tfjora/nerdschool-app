import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./summary.css";

const Summary = props => (
    <div className="summary__container">
        <p className="summary__text">
            {`${props.completedTodosCount}/${props.todosCount} tasks completed`}
        </p>
    </div>
);

Summary.propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedTodosCount: PropTypes.number
};

export default Summary;