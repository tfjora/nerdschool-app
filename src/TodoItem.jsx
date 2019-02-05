import React from "react";
import PropTypes from "prop-types";

import "./todoItem.css";

const TodoItem = ({ id, description }) => (
    <div className="todo-item__container">
        <input type="checkbox" id={`todoItemCheckbox-${id}`}/>
        <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
        <input type="button" value="Delete" ></input>
    </div>
);

TodoItem.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default TodoItem;