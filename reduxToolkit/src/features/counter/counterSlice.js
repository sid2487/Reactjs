import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: 0,
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increament: (state) => {
            state.value += 1
        },
        decreament: (state) => {
            state.value -= 1
        },
        increamentByAmount: (state, aciton) => {
            state.value += Number(aciton.payload)
        }
    }
})

export const { increament, decreament, increamentByAmount} = counterSlice.actions

export default counterSlice.reducer