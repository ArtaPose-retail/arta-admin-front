import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isfullScrenn: false

};

export const general = createSlice({
    name: "general",
    initialState,

    reducers: {
        setFullscrenn: (state, { payload }) => {

            state.isfullScrenn = payload
        },
    },

    extraReducers: (builder) => {

    }
})

export const { setFullscrenn } = general.actions;

export default general.reducer;