import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPicThunk } from './galleryThunk';

const initialState = {
    loading: false,
    picList: []
}


export const getPicList = createAsyncThunk("gallery/list", getPicThunk)

export const gallery = createSlice({
    name: "gallery",
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPicList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getPicList.fulfilled, (state, { payload }) => {
            state.loading = false
            console.log(payload.data.data)
            state.picList = payload.data.data
        })
        builder.addCase(getPicList.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { } = gallery.actions
export default gallery.reducer