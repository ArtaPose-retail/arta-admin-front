import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCahierData } from "./CashierThunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    cashierData: null,
};

export const Cashierinfo = createAsyncThunk("cashier/data", GetCahierData);

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
    },
});

export const { } = cashier.actions;
export default cashier.reducer;
