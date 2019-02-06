import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { createTodo } from './todoAction';
import Todo from "./Todo";

class TodoListContainer extends React.Component {
    componentDidMount() {
        this.props.createTodoFn(1, "Wake up");
        this.props.createTodoFn(2, "Do the dishes");
        this.props.createTodoFn(3, "Fold clothes");
        this.props.createTodoFn(4, "Browse Reddit");
    }

    render() {
        return <TodoList {...this.props} />;
    }
}

TodoListContainer.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
    createTodoFn: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    createTodoFn: (id, description) => dispatch(createTodo(id, description))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);