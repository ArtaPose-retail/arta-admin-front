import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUnitListThunk } from './unitThunk';



const initialState = {
    unitList: [],
    loading: false,
    update: false,
    NewType: null,
}


export const getUnitList = createAsyncThunk("productUnit/list", getUnitListThunk)

export const productUnit = createSlice({
    name: "productUnit",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //? list
        builder.addCase(getUnitList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUnitList.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.loading = false
            state.unitList = payload.data.data
        })
        builder.addCase(getUnitList.rejected, (state) => {
            state.loading = false
        })
    }
});

export const { } = productUnit.actions;
export default productUnit.reducer;