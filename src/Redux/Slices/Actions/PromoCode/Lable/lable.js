import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deletePromoList, getPromoList } from "./lableThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    newPromoInfo: {
        type: null,
        amount: null,
        from_amount: null,
        to_amount: null,
        started_time: null,
        end_time: null,
        code: null,
        used_count: null,
        orderlimit: null
    },
    promoList: []

};

export const getList = createAsyncThunk("PC/get list", getPromoList)
export const deletePC = createAsyncThunk("PC/delete", deletePromoList)

export const lable = createSlice({
    name: "lable",
    initialState,

    reducers: {

    },

    extraReducers: (builder) => {
        //? get list
        builder.addCase(getList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getList.fulfilled, (state, { payload }) => {
            state.loading = false
            state.update = false
            state.promoList = payload.data.data
        })
        builder.addCase(getList.rejected, (state) => {
            state.loading = false
        })

        //?delte
        builder.addCase(deletePC.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deletePC.fulfilled, (state) => {
            state.loading = false
            state.update = true
            toastHandler("با موفقیت حذف شد", "info")
        })
        builder.addCase(deletePC.rejected, (state) => {
            state.loading = false
        })

    }
})

export const { } = lable.actions;

export default lable.reducer;