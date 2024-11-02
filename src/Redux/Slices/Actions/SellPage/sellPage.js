import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    update: false,
    transactionInfo: null,
    singleOrder: {
        product_id: 0,
        quantity: 1,
        unitprice: 0
    }
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
