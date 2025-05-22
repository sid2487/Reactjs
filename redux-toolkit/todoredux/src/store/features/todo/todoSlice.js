import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
    try {
        const data = localStorage.getItem("todos");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: loadTodos(),
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            })
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;