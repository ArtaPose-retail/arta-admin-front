import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toastHandler } from "../../../../utils/setting";
import { GetOrderPayemnt, GetPaymentBA } from "./paymentThunk";

const initialState = {
    loadingPay: false,
    updatePay: false,
    paymentBA: [],
    paymentOrderList: [],
    newPayment: {
        amount: 0,
        bank_account_id: 0,
        extra: {},
        is_order_specific: true,
        method_id: 0,
        order_id: 0,
        public_id: "",
        sub_transaction_type: "",
        submitter_user_id: 0,
        transaction_id: 0,
        transaction_reason_id: 0,
        transaction_type: ""
    }
};

export const PaymentBAList = createAsyncThunk("payment/BAList", GetPaymentBA);

export const OrderPayList = createAsyncThunk(
    "payment/orderList",
    GetOrderPayemnt
);

export const payment = createSlice({
    name: "payment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PaymentBAList.pending, (state) => {
            state.loadingPay = true;
        });
        builder.addCase(PaymentBAList.fulfilled, (state, { payload }) => {
            state.loadingPay = false;
            state.paymentBA = payload.data.data;
        });
        builder.addCase(PaymentBAList.rejected, (state) => {
            state.loadingPay = false;
            toastHandler("خطا در payemntBAList", "list");
        });

        //?order payment list 

        builder.addCase(OrderPayList.pending, (state) => {
            state.loadingPay = true;
        });
        builder.addCase(OrderPayList.fulfilled, (state, { payload }) => {
            state.loadingPay = false;
            //   state.paymentBA = payload.data.data;
            console.log(payload.data)
        });
        builder.addCase(OrderPayList.rejected, (state) => {
            state.loadingPay = false;
            toastHandler("خطا در payemntBAList", "list");
        });


    },
});

export const { } = payment.actions;
export default payment.reducer;
