import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddBN, BNList, DeleteName } from "./BNThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    BNupdate: false,
    bankNamekList: [],
    newBankName: {
        title: "",
        image_name: "",
    },
};

export const BankNameList = createAsyncThunk("BN/list", BNList);
export const addBankName = createAsyncThunk("BN/create", AddBN);
export const deleteBankName = createAsyncThunk("BN/delete", DeleteName);

export const bankName = createSlice({
    name: "bankName",
    initialState,
    reducers: {
        addBankNameInfo: (state, { payload }) => {
            state.newBankName[payload.key] = payload.value;
        },
    },
    extraReducers: (builder) => {
        //?list
        builder.addCase(BankNameList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(BankNameList.fulfilled, (state, { payload }) => {
            (state.loading = false), (state.bankNamekList = payload.data?.data);
            state.BNupdate = false;
        });
        builder.addCase(BankNameList.rejected, (state) => {
            (state.loading = false),
                toastHandler("خطایی در دریافت لیست اسامی بانک ها رخ داده است", "info");
        });

        //?add
        builder.addCase(addBankName.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addBankName.fulfilled, (state, { payload }) => {
            (state.loading = false), (state.BNupdate = true);
        });
        builder.addCase(addBankName.rejected, (state) => {
            (state.loading = false),
                toastHandler("خطایی رخ داده است", "info");
        });
        //?delete
        builder.addCase(deleteBankName.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteBankName.fulfilled, (state, { payload }) => {
            (state.loading = false), (state.BNupdate = true);
        });
        builder.addCase(deleteBankName.rejected, (state) => {
            (state.loading = false),
                toastHandler("خطایی در حذف رخ داده است", "info");
        });
    },
});

export const { addBankNameInfo } = bankName.actions;
export default bankName.reducer;
