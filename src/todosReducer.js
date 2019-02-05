import Todo from "./Todo";

const todosReducer = (todos = [], action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return [
                ...todos,
                new Todo(todos.length + 1, action.description)
            ];
        default:
            return todos;
    }
}
export default todosReducer;