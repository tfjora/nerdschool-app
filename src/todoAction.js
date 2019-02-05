export const createTodo = description => ({
    type: "CREATE_TODO",
    description
});
export const deleteTodo = id => ({
    type: "DELETE_TODO",
    id
});
export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id
})