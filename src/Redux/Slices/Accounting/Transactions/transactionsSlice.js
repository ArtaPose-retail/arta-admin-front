import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TransactionListThunk } from "./transactioThunk";

const initialState = {
    TransActionList: [],
    loading: false,
    update: false,
};

export const getTransactions = createAsyncThunk(
    "transaction/list",
    TransactionListThunk
);

export const transactionsSlice = createSlice({
    name: "transactionsSlice",
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        //?get list
        builder.addCase(getTransactions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.TransActionList = payload.data;
        });
        builder.addCase(getTransactions.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { } = transactionsSlice.actions;
export default transactionsSlice.reducer;
