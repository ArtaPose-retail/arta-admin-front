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
        unitprice: 0
    },
    scaleData: null
};

export const AddProdOrder = createAsyncThunk("sellpage/addProd", addProdOrderThunk)

export const sellPage = createSlice({
    name: "sellPage",
    initialState,
    reducers: {
        setTransactionInfo: (state, { payload }) => {
            state.transactionInfo = payload;
        },
        resetTransactionInfo: (state) => {
            state.transactionInfo = initialState.transactionInfo
        },
        setSingleOrderInfo: (state, { payload }) => {
            state.singleOrder[payload.key] = payload.value;
        },
        setScaleData: (state, { payload }) => {
            state.scaleData = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(AddProdOrder.pending, (state) => {
            state.loading = true
            state.sellUpdate = true
        })
        builder.addCase(AddProdOrder.fulfilled, (state) => {
            state.loading = false
            state.sellUpdate = false
        })
        builder.addCase(AddProdOrder.rejected, (state) => {
            state.loading = false
            state.sellUpdate = false,
                toastHandler("خطا در  افزودن محصول. موجودی را بررسی کنید", "error")
        })
    },
});

export const { setTransactionInfo, setSingleOrderInfo, setScaleData, resetTransactionInfo } = sellPage.actions;
export default sellPage.reducer;
