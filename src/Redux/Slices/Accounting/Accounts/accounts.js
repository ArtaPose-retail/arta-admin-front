import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccountList } from "./AccountsThunk";



const initialState = {
    loading: false,
    update: false,
    accountList: []

};


export const ProfileList = createAsyncThunk("accounts/list", getAccountList)



export const accounts = createSlice({
    name: "accounts",
    initialState,

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(ProfileList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(ProfileList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.accountList = payload.data.data
        })
        builder.addCase(ProfileList.rejected, (state) => {
            state.loading = true
        })
    },
});

export const { } = accounts.actions;

export default accounts.reducer;
