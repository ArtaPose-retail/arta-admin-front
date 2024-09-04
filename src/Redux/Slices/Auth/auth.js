import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginThunk } from "./ApiCall";
const initialState = {
    loading: false,
    token: null,
    addmission: []
};

const LoginAction = createAsyncThunk("auth/login", LoginThunk)

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});

export const { } = auth.actions;
export default auth.reducer;
