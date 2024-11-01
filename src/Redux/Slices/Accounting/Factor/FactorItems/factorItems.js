import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addFactorItems } from "./FactorItemsThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    newFacrtorItems: {
        product_id: null,
        quantity: null,
        buy_price_fee: null,
        tax: null,
        original_price_fee: null,
        sell_price_fee: null,
    },
    factorItemsRes: null,
};

export const FactorItemsAdd = createAsyncThunk(
    "factorItems/add",
    addFactorItems
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
        builder.addCase(FactorItemsAdd.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(FactorItemsAdd.fulfilled, (state, { payload }) => {
            (state.loading = false), (state.factorItemsRes = payload.data.data);
            toastHandler("با موفقیت ثبت شد", "info");
        });
        builder.addCase(FactorItemsAdd.rejected, (state) => {
            (state.loading = false), toastHandler(" خطا  ", "info");
        });
    },
});

export const { setFactorItems } = factorItems.actions;
export default factorItems.reducer;
