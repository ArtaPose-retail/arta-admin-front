import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addnewOrder, GetOrderList, GetSingleOrderProd } from "./OrderThunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    orderList: [],
    cardId: 0,
    OrderProductList: []
};

export const OrderList = createAsyncThunk("order/list", GetOrderList);
export const addOrder = createAsyncThunk("order/add", addnewOrder);
export const SingleOrderProds = createAsyncThunk("order/prodList", GetSingleOrderProd);

export const Order = createSlice({
    name: "Order",
    initialState,

    reducers: {
        getCardId: (state, { payload }) => {
            state.cardId = payload
        }
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
            state.OrderProductList = payload.data.data
        });
        builder.addCase(SingleOrderProds.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده مجددا وارد شوید", "info");
        });
    },
});

export const { getCardId } = Order.actions;

export default Order.reducer;
