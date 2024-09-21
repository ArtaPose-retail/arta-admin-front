import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TransactionAddThunk, TransactionDeleteThunk, TransactionListThunk } from "./transactioThunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    TransActionList: [],
    loading: false,
    update: false,
    newTransaction: {
        fname: "",
        lname: "",
        user_type: "",
        shmeli: "",
        phone1: "",
        phone2: "",
        phone3: "",
        home_address: "",
        referer: "",
        qualification: ""
    }
};

export const getTransactions = createAsyncThunk(
    "transaction/list",
    TransactionListThunk
);
export const deleteTransactions = createAsyncThunk(
    "transaction/delete",
    TransactionDeleteThunk
);
export const addTransactions = createAsyncThunk(
    "transaction/add",
    TransactionAddThunk
);

export const transactionsSlice = createSlice({
    name: "transactionsSlice",
    initialState,

    reducers: {
        setNewTransaction: (state, { payload }) => {
            state.newTransaction[payload.key] = payload.value
        },
        resetNewTransaction: (state) => {
            state.newTransaction = initialState.newTransaction
        }
    },
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


        //?delete 
        builder.addCase(deleteTransactions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteTransactions.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
            toastHandler("ایتم مورد  نظر حذف شد", "info");
        });
        builder.addCase(deleteTransactions.rejected, (state) => {
            state.loading = false;
        });


        //?add 
        builder.addCase(addTransactions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addTransactions.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
            toastHandler("ایتم مورد  نظر اضافه شد", "info");
        });
        builder.addCase(addTransactions.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setNewTransaction, resetNewTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
