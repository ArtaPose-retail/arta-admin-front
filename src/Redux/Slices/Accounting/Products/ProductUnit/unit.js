import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addUnitThunk, deleteUnitThunk, getUnitListThunk } from './unitThunk';



const initialState = {
    unitList: [],
    loading: false,
    update: false,
    addType: {
        pu_title: null
    },
}


export const getUnitList = createAsyncThunk("productUnit/list", getUnitListThunk)
export const addUnit = createAsyncThunk("productUnit/add", addUnitThunk)
export const deleteUnit = createAsyncThunk("productUnit/delete", deleteUnitThunk)

export const productUnit = createSlice({
    name: "productUnit",
    initialState,
    reducers: {
        setUnitInf: (state, { payload }) => {
            state.addType[payload.key] = payload.value
        }

    },
    extraReducers: (builder) => {
        //? list
        builder.addCase(getUnitList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUnitList.fulfilled, (state, { payload }) => {
            state.loading = false
            state.update = false
            state.unitList = payload.data.data
        })
        builder.addCase(getUnitList.rejected, (state) => {
            state.loading = false
        })
        //? add
        builder.addCase(addUnit.pending, (state) => {
            state.loading = true
        })
        builder.addCase(addUnit.fulfilled, (state, { payload }) => {
            state.loading = false
            state.update = true

        })
        builder.addCase(addUnit.rejected, (state) => {
            state.loading = false
        })
        //? delete
        builder.addCase(deleteUnit.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteUnit.fulfilled, (state, { payload }) => {
            state.loading = false
            state.update = true

        })
        builder.addCase(deleteUnit.rejected, (state) => {
            state.loading = false
        })
    }
});

export const { setUnitInf } = productUnit.actions;
export default productUnit.reducer;