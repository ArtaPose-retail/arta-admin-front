import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProdOrderThunk } from "./SellpageThunk";

const initialState = {
    loading: false,
    update: false,
    transactionInfo: null,
    singleOrder: {
        product_id: 0,
        quantity: 1,
        unitprice: 0
    }
};

export const AddProdOrder = createAsyncThunk("sellpage/addProd", addProdOrderThunk)

export const sellPage = createSlice({
    name: "sellPage",
    initialState,
    reducers: {
        setTransactionInfo: (state, { payload }) => {
            state.transactionInfo = payload;
        },
        setSingleOrderInfo: (state, { payload }) => {
            state.singleOrder[payload.key] = payload.value;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(AddProdOrder.pending, (state) => {
            state.loading = true
        })
        builder.addCase(AddProdOrder.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(AddProdOrder.rejected, (state) => {
            state.loading = false
        })
    },
});

export const { setTransactionInfo, setSingleOrderInfo } = sellPage.actions;
export default sellPage.reducer;
