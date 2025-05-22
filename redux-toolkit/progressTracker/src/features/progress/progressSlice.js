import { createSlice, nanoid } from "@reduxjs/toolkit";

const progressSlice = createSlice({
    name: 'progress',
    initialState: [],
    reducers: {
        
            addTask: {
                reducer(state, action){
                    state.push(action.payload);
                },
                prepare(title){
                    return{
                        payload: {
                            id: nanoid(),
                            title,
                            progress: 0,
                        }
                    }
                }
            },

            updateProgress(state, action) {
                const {id, progress} = action.payload;
                const task = state.find((t) => t.id == id);
            }
    }
})