import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserListThunk } from "./userthunk";

const initialState = {
    loading: false,
    userList: [],
};

export const getAllUser = createAsyncThunk("uesr/list", UserListThunk);
export const user = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});

export const { } = user.actions;
export default user.reducer;
