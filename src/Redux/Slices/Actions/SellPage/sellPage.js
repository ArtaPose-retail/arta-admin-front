import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    update: false,
    transactionInfo: null,
};

export const sellPage = createSlice({
    name: "sellPage",
    initialState,
    reducers: {
        setTransactionInfo: (state, { payload }) => {
            state.transactionInfo = payload;
        },
    },
    extraReducers: (builder) => { },
});

export const { setTransactionInfo } = sellPage.actions;
export default sellPage.reducer;
