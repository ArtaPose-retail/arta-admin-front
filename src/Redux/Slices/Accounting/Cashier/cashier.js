import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCahierData, GetseleInfo } from "./CashierThunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    cashierData: null,
    selesData: null
};

export const Cashierinfo = createAsyncThunk("cashier/data", GetCahierData);
export const SelesInfo = createAsyncThunk("cashier/sales", GetseleInfo);

export const cashier = createSlice({
    name: "cashier",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //?list
        builder.addCase(Cashierinfo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(Cashierinfo.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.cashierData = payload.data?.data;
            state.update = false;
        });
        builder.addCase(Cashierinfo.rejected, (state) => {
            (state.loading = false),
                toastHandler("خطایی در دریافت لیست صندوق ها رخ داده است", "info");
        });
        //?seles
        builder.addCase(SelesInfo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(SelesInfo.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.selesData = payload.data?.data;
            state.update = false;
        });
        builder.addCase(SelesInfo.rejected, (state) => {
            (state.loading = false),
                toastHandler("خطایی در دریافت لیست صندوق ها رخ داده است", "info");
        });
    },
});

export const { } = cashier.actions;
export default cashier.reducer;
