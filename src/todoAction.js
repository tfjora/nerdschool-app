export const createTodo = (id, description) => ({
    type: "CREATE_TODO",
    id,
    description
});

export const deleteTodo = id => ({
    type: "DELETE_TODO",
    id
});

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id
});