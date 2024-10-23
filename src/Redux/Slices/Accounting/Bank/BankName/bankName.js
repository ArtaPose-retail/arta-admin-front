import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BNList } from "./BNThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    bankNamekList: [],
    newBankName: {
        title: "",
        logo_id: ""

    },
};

export const BankNameList = createAsyncThunk("BN/list", BNList);

export const bankName = createSlice({
    name: "bankName",
    initialState,
    reducers: {
        addBankNameInfo: (state, { payload }) => {
            state.newBankName[payload.key] = payload.value
        }
    },
    extraReducers: (builder) => {
        builder.addCase(BankNameList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(BankNameList.fulfilled, (state, { payload }) => {
            (state.loading = false), (state.bankNamekList = payload.data?.data);
        });
        builder.addCase(BankNameList.rejected, (state) => {
            (state.loading = false),
                toastHandler("خطایی در دریافت لیست اسامی بانک ها رخ داده است", "info");
        });
    },
});

export const { addBankNameInfo } = bankName.actions;
export default bankName.reducer;
