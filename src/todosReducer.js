import Todo from "./Todo";

export const todosReducer = (todos = [], action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return [
                ...todos,
                new Todo(action.id, action.description)
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

export const getNextId = state => {
    const todos = state.todos;
    for (var i = 1; i <= todos.length; i++) {
        if (!isTodosWithSameId(i, todos)) {
            return i;
        }
    }
    return todos.length + 1;
}

const isTodosWithSameId = (id, todos) => {
    return todos.filter(todo => todo.id === id).length > 0;
}