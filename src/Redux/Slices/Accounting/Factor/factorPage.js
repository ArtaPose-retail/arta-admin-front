import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetFactorList } from "./factorPageThunk";

const initialState = {
    loading: false,
    factorList: [],
};

export const FactorListGet = createAsyncThunk("factorPage/get", GetFactorList);

export const factorPage = createSlice({
    name: "factorPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FactorListGet.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(FactorListGet.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.factorList = payload.data.data;
        });
        builder.addCase(FactorListGet.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { } = factorPage.actions;

export default factorPage.reducer;
