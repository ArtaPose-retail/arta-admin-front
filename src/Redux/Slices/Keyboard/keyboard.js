import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    inputValue: {
        id: "",
        value: ""
    },
    show: false
};

export const keyboard = createSlice({
    name: "keyboard",
    initialState,

    reducers: {
        onChangevalue: (state, action) => {
            state.inputValue = action.payload
        },
        showKeyboard: (state, action) => {
            state.show = action.payload
        }
    },

    extraReducers: (builder) => {

    }
})

export const { onChangevalue, showKeyboard } = keyboard.actions;

export default keyboard.reducer;