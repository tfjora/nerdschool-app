import "./addTodo.css";
import React from "react";
import PropTypes from "prop-types";

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            userInput: ''
        }
        
        this.onUserInput = this.onUserInput.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }

    render() {
        return (
            <div className="todo-add__container">
                <input type="textbox" onChange={this.onUserInput} />
                <input type="button" value="Add" onClick={this.onAddClick} />
            </div>
        )
    }

    onUserInput(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    onAddClick() {
        this.props.createTodoFn(this.state.userInput);
    }

}

AddTodo.propTypes = {
    createTodoFn: PropTypes.func.isRequired
};

export default AddTodo;