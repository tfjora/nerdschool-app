import Todo from "./Todo";

const todosReducer = (todos = [], action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return [
                ...todos,
                new Todo(todos.length + 1, action.description)
            ];
        case "DELETE_TODO":
            return todos.filter(todo => todo.id !== action.id)
        case "TOGGLE_TODO":
            const newTodos = [...todos];
            const todo = newTodos.find(todo => todo.id === action.id);
            todo.isCompleted = !todo.isCompleted;
            return newTodos;
        default:
            return todos;
    }
}

export const getCompletedTodos = state => {
    return state.todos.filter(todo => todo.isCompleted);
}

export default todosReducer;