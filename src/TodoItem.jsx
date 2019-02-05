import React from "react";
import PropTypes from "prop-types";
import "./todoItem.css";

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.onCheckboxToggle = this.onCheckboxToggle.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    render() {
        const { id, description } = this.props;
        return (
            <div className="todo-item__container">
                <input type="checkbox" id={`todoItemCheckbox-${id}`} onChange={this.onCheckboxToggle}/>
                <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
                <input type="button" value="Delete" onClick={this.onDeleteClick}></input>
            </div>
        )
    }

    onCheckboxToggle(){
        this.props.toggleTodoFn(this.props.id);
    }

    onDeleteClick() {
        this.props.deleteTodoFn(this.props.id);
    }

}

TodoItem.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deleteTodoFn: PropTypes.func.isRequired,
    toggleTodoFn: PropTypes.func.isRequired
};

export default TodoItem;