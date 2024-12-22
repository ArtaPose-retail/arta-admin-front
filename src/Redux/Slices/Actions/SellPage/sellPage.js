import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProdOrderThunk } from "./SellpageThunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    sellUpdate: false,
    transactionInfo: null,
    singleOrder: {
        product_id: 0,
        quantity: 1,
        unitprice: null,
    },
    scaleData: {
        weight: 0
    },
};

export const AddProdOrder = createAsyncThunk(
    "sellpage/addProd",
    addProdOrderThunk
);

export const sellPage = createSlice({
    name: "sellPage",
    initialState,
    reducers: {
        setTransactionInfo: (state, { payload }) => {
            state.transactionInfo = payload;
        },
        resetTransactionInfo: (state) => {
            state.transactionInfo = initialState.transactionInfo;
        },
        setSingleOrderInfo: (state, { payload }) => {
            if (payload.key != "price") {

                state.singleOrder[payload.key] = payload.value;
            } else {
                state.singleOrder.unitprice = payload.value;

            }
        },
        setScaleData: (state, { payload }) => {
            state.scaleData.weight = payload.weight;
        },
        resetSingleOrder: (state) => {
            state.singleOrder = initialState.singleOrder;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(AddProdOrder.pending, (state) => {
            state.loading = true;
            state.sellUpdate = true;
        });
        builder.addCase(AddProdOrder.fulfilled, (state) => {
            state.loading = false;
            state.sellUpdate = false;
            state.singleOrder = initialState.singleOrder
        });
        builder.addCase(AddProdOrder.rejected, (state) => {
            state.loading = false;
            (state.sellUpdate = false),
                toastHandler("خطا در  افزودن محصول. موجودی را بررسی کنید", "error");
        });
    },
});

export const {
    setTransactionInfo,
    setSingleOrderInfo,
    setScaleData,
    resetTransactionInfo,
    resetSingleOrder
} = sellPage.actions;
export default sellPage.reducer;
