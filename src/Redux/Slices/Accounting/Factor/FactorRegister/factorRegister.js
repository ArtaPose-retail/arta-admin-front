import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { finilizeFator } from "./FactorRegisterThunk";

const initialState = {
    loading: false,
    update: false,

}

export const finalizeFactorAction = createAsyncThunk("factorRegister/add", finilizeFator)

export const factorRegister = createSlice({
    name: "factorRegister",
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(finalizeFactorAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(finalizeFactorAction.fulfilled, (state, { payload }) => {
            state.loading = false;
            console.log(payload.data)
        })
        builder.addCase(finalizeFactorAction.rejected, (state) => {
            state.loading = false
        })
    }
})


export const { } = factorRegister.actions;

export default factorRegister.reducer;