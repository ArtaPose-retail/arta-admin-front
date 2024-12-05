import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    addnewOrder,
    CalculateOrder,
    GetOrderList,
    GetSingleOrderProd,
} from "./OrderThunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    orderList: [],
    cardId: 0,
    cardInfo: null,
    OrderProductList: [],
    OrderPrice: {
        order_price: 0,
        calculated_discount: 0,
    },
    promoCode: "",
};

export const OrderList = createAsyncThunk("order/list", GetOrderList);
export const addOrder = createAsyncThunk("order/add", addnewOrder);
export const SingleOrderProds = createAsyncThunk(
    "order/prodList",
    GetSingleOrderProd
);
export const CalcOrders = createAsyncThunk("order/clc", CalculateOrder);

export const Order = createSlice({
    name: "Order",
    initialState,

    reducers: {
        getCardId: (state, { payload }) => {
            state.cardId = payload;
        },
        getCardInfo: (state, { payload }) => {
            state.cardInfo = payload;
        },
        setPromoCode: (state, { payload }) => {
            state.promoCode = payload;
        },
        resetPromoCode: (state) => {
            state.promoCode = initialState.promoCode;
        },
    },

    extraReducers: (builder) => {
        //?Create
        builder.addCase(OrderList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(OrderList.fulfilled, (state, { payload }) => {
            (state.loading = false), (state.orderList = payload.data.data);
            state.update = false;
        });
        builder.addCase(OrderList.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده مجددا وارد شوید", "info");
        });
        //?add
        builder.addCase(addOrder.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addOrder.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
            console.log(payload.data.data);
        });
        builder.addCase(addOrder.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده مجددا وارد شوید", "info");
        });
        //!single order product list
        builder.addCase(SingleOrderProds.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(SingleOrderProds.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
            state.OrderProductList = payload.data.data;
        });
        builder.addCase(SingleOrderProds.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده مجددا وارد شوید", "info");
        });
        //!calculate orders price
        builder.addCase(CalcOrders.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(CalcOrders.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.OrderPrice = payload.data.data;
        });
        builder.addCase(CalcOrders.rejected, (state, action) => {
            state.loading = false;

            const message = action.error.message;
            const statusMatch = message.match(/\d+/); // استخراج اولین عدد
            if (statusMatch) {
                const statusCode = parseInt(statusMatch[0]);
                console.log(`Extracted status code: ${statusCode}`);
                if (statusCode === 409) {
                    toastHandler("کد تخفیف اشتباه است", "error")
                }
            } else {
                console.error('No status code found in message');
            }
        });
    },
});

export const { getCardId, getCardInfo, setPromoCode, resetPromoCode } =
    Order.actions;

export default Order.reducer;
