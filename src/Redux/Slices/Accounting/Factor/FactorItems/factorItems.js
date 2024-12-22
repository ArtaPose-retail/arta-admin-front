import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addFactorItems,
    deleteOrderItemThunk,
    editFactorItems,
    OrderItemList,
} from "./FactorItemsThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    newFacrtorItems: {
        product_id: "",
        quantity: "",
        initial_buy_price: "",
        tax: "",
        original_price: "",
        unitprice: "",
        discount: "",
        meta: {}
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
export const EditOrderItem = createAsyncThunk(
    "factorItems/edit",
    editFactorItems
);

export const factorItems = createSlice({
    name: "factorItems",
    initialState,
    reducers: {
        setFactorItems: (state, { payload }) => {
            if (payload.key != "expire_date") {

                state.newFacrtorItems[payload.key] = payload.value
            } else {
                state.newFacrtorItems.meta[payload.key] = payload.value
            }
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
        //? edit
        builder.addCase(EditOrderItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(EditOrderItem.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.factorItemsRes = payload.data.data;
            state.update = true;
            state.newFacrtorItems = initialState.newFacrtorItems
            toastHandler("با موفقیت ثبت شد", "info");
        });
        builder.addCase(EditOrderItem.rejected, (state) => {
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
