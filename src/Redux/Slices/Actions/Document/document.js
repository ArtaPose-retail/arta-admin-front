import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocList } from "./DocumentThunk";


const initialState = {
    loading: false,
    update: false,
    docList: []

};


export const DocumentList = createAsyncThunk("doc/list", getDocList)


export const document = createSlice({
    name: "document",
    initialState,

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(DocumentList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(DocumentList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.docList = payload.data.data
        })
        builder.addCase(DocumentList.rejected, (state) => {
            state.loading = true
        })
    },
});

export const { } = document.actions;

export default document.reducer;
