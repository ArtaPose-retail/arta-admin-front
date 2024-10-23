import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toastHandler } from "../../../../../utils/setting";
import { AddBankType, BankTypeList } from "./bankTypeThunk";

const initialState = {
    loading: false,
    updateType: false,
    bankTypeList: [],
    newBankType: {
        title: ""
    }
};

export const BTlist = createAsyncThunk("bankType/list", BankTypeList);

export const addBtype = createAsyncThunk("bankType/add", AddBankType)

export const bankType = createSlice({
    name: "bankType",
    initialState,
    reducers: {
        addBankTypeInfo: (state, { payload }) => {
            state.newBankType[payload.key] = payload.value;
        },
    },
    extraReducers: (builder) => {
        //!get
        builder.addCase(BTlist.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(BTlist.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.updateType = false
            state.bankTypeList = payload.data.data;
        });
        builder.addCase(BTlist.rejected, (state) => {
            state.loading = false;
            toastHandler("خطا در نوع حساب", "info");
        });
        //!add
        builder.addCase(addBtype.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addBtype.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.updateType = true
        });
        builder.addCase(addBtype.rejected, (state) => {
            state.loading = false;
            toastHandler("خطا در نوع حساب", "info");
        });
    },
});

export const { addBankTypeInfo } = bankType.actions;
export default bankType.reducer;
