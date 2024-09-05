import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserListThunk } from "./userthunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    userList: null,
};

export const getAllUser = createAsyncThunk("uesr/list", UserListThunk);

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.userList = payload.data;
        });
        builder.addCase(getAllUser.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده لطفا مجدد وارد شوید", info);
        });
    },
});

export const { } = user.actions;
export default user.reducer;
