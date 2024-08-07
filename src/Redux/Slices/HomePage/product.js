import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    showRefrigrateItems: false

};

export const product = createSlice({
    name: "product",
    initialState,

    reducers: {
        handleShowRefrigerateitems: (state, action) => {
            state.showRefrigrateItems = action.payload
        }

    },

    extraReducers: (builder) => {

    }
})

export const { handleShowRefrigerateitems } = product.actions;

export default product.reducer;