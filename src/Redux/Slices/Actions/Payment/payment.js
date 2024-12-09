import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toastHandler } from "../../../../utils/setting";
import { addNewPayment, GetOrderPayemnt, GetPaymentBA } from "./paymentThunk";

const initialState = {
    loadingPay: false,
    updatePay: false,
    paymentBA: [],
    paymentOrderList: [],
    newPayment: {
        amount: "",
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

export const AddPayment = createAsyncThunk("payment/add", addNewPayment)

export const payment = createSlice({
    name: "payment",
    initialState,
    reducers: {

        setPaymentInfo: (state, { payload }) => {
            state.newPayment[payload.key] = payload.value
        },
        resetPaymentInfo: (state, { payload }) => {
            state.newPayment[payload.key] = initialState.newPayment[payload.value]
        }

    },
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
            state.updatePay = false
            state.paymentOrderList = payload.data.data;

        });
        builder.addCase(OrderPayList.rejected, (state) => {
            state.loadingPay = false;
            toastHandler("خطا در payemntBAList", "list");
        });

        //?order payment add 

        builder.addCase(AddPayment.pending, (state) => {
            state.loadingPay = true;
        });
        builder.addCase(AddPayment.fulfilled, (state, { payload }) => {
            state.loadingPay = false;
            state.updatePay = true
            //   state.paymentBA = payload.data.data;
            console.log(payload.data)
            state.newPayment.amount = initialState.newPayment.amount
        });
        builder.addCase(AddPayment.rejected, (state) => {
            state.loadingPay = false;
            toastHandler("خطا در Add Payment", "list");
        });


    },
});

export const { setPaymentInfo, resetPaymentInfo } = payment.actions;
export default payment.reducer;
