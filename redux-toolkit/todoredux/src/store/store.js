import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice"

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});


// save todos to local storage
store.subscribe(() => {
    const { todos } = store.getState().todo;
    localStorage.setItem("todos", JSON.stringify(todos));
})



// Flow: dispatch(action) ➝ reducer updates state ➝ store state changes ➝ store.subscribe() runs ➝ sync to localStorage (or other side effects)

// subscribe: Whenever the state changes, update the localStorage with the new todos.
