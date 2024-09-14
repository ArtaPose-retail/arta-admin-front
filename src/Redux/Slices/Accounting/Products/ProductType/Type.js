import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TypeAddThunk, TypeDeleteThunk, TypeThunk } from "./typeThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    typeList: [],
    loading: false,
    update: false,
    NewType: null
};

export const getallType = createAsyncThunk("productType/list", TypeThunk);
export const deleteType = createAsyncThunk("productType/delete", TypeDeleteThunk);
export const addType = createAsyncThunk("productType/add", TypeAddThunk);

export const productType = createSlice({
    name: "productType",
    initialState,
    reducers: {
        setNewType: (state, { payload }) => {
            state.NewType = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getallType.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getallType.fulfilled, (state, { payload }) => {
            (state.loading = false), (state.typeList = payload.data);
            state.update = false
        });
        builder.addCase(getallType.rejected, (state) => {
            state.loading = false;
        });
        //?delete
        builder.addCase(deleteType.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteType.fulfilled, (state, { payload }) => {
            (state.loading = false),
                state.update = true
            toastHandler("با موفقیت حذف شد", "info")
        });
        builder.addCase(deleteType.rejected, (state) => {
            state.loading = false;
        });
        //?add
        builder.addCase(addType.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addType.fulfilled, (state, { payload }) => {
            (state.loading = false),
                state.update = true
            toastHandler("با موفقیت اضافه شد", "info")
        });
        builder.addCase(addType.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setNewType } = productType.actions;
export default productType.reducer;
