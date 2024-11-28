import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toastHandler } from "../../../../utils/setting";
import { GetPaymentBA } from "./paymentThunk";

const initialState = {
    loadingPay: false,
    updatePay: false,
    paymentBA: [],


};

export const PaymentBAList = createAsyncThunk("payment/BAList", GetPaymentBA)



export const payment = createSlice({
    name: "payment",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(PaymentBAList.pending, (state) => {
            state.loadingPay = true
        })
        builder.addCase(PaymentBAList.fulfilled, (state, { payload }) => {
            state.loadingPay = false;
            state.paymentBA = payload.data.data
        })
        builder.addCase(PaymentBAList.rejected, (state) => {
            state.loadingPay = false;
            toastHandler("خطا در payemntBAList", "list")
        })
    },
});

export const { } = payment.actions;
export default payment.reducer;
