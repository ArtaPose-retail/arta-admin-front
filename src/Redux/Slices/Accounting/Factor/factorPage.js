import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetfactorDetails, GetFactorList } from "./factorPageThunk";
import { toastHandler } from "../../../../utils/setting";
import reactRouts from "../../../../utils/reactRouts";

const initialState = {
    loading: false,
    factorList: [],
    details: []
};

export const FactorListGet = createAsyncThunk("factorPage/get", GetFactorList);

export const FactorDetails = createAsyncThunk("factor/details", GetfactorDetails)

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
        //?factor details

        builder.addCase(FactorDetails.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(FactorDetails.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.details = payload.data.data
            window.location.pathname = reactRouts.safi.main
        })
        builder.addCase(FactorDetails.rejected, (state, { payload }) => {
            state.loading = false;
            toastHandler("خطا در دریافت اطلاعات", "error")
        })
    },
});

export const { } = factorPage.actions;

export default factorPage.reducer;
