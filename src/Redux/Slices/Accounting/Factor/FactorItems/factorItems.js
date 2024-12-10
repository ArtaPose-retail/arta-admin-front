import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addFactorItems,
    deleteOrderItemThunk,
    OrderItemList,
} from "./FactorItemsThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    newFacrtorItems: {
        product_id: "",
        quantity: "",
        buy_price_fee: "",
        tax: "",
        original_price_fee: "",
        sell_price_fee: "",
        discount: ""
    },
    factorItemsRes: null,
    singleOrderList: [],
};

export const FactorItemsAdd = createAsyncThunk(
    "factorItems/add",
    addFactorItems
);
export const FactorItemslist = createAsyncThunk(
    "factorItems/list",
    OrderItemList
);

export const DeleteOrderItem = createAsyncThunk(
    "factorItems/delete",
    deleteOrderItemThunk
);

export const factorItems = createSlice({
    name: "factorItems",
    initialState,
    reducers: {
        setFactorItems: (state, { payload }) => {
            state.newFacrtorItems[payload.key] = payload.value;
        },
    },
    extraReducers: (builder) => {
        //?add
        builder.addCase(FactorItemsAdd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(FactorItemsAdd.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.factorItemsRes = payload.data.data;
            state.update = true;
            state.newFacrtorItems = initialState.newFacrtorItems
            toastHandler("با موفقیت ثبت شد", "info");
        });
        builder.addCase(FactorItemsAdd.rejected, (state) => {
            (state.loading = false), toastHandler(" خطا  ", "info");
        });

        //?list
        builder.addCase(FactorItemslist.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(FactorItemslist.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.singleOrderList = payload.data.data;
        });
        builder.addCase(FactorItemslist.rejected, (state) => {
            (state.loading = false), toastHandler(" خطا  ", "info");
        });
        //?delete
        builder.addCase(DeleteOrderItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(DeleteOrderItem.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
            toastHandler("ایتم مورد  نظر حذف شد", "warning");
        });
        builder.addCase(DeleteOrderItem.rejected, (state) => {
            state.loading = false;
            toastHandler(" خطا  ", "info");
        });
    },
});

export const { setFactorItems } = factorItems.actions;
export default factorItems.reducer;
