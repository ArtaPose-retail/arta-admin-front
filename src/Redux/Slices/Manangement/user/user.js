import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserThunk, UserListThunk } from "./userthunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    userList: null,
    UserInfo: {
        fname: null,
        lname: null,
        username: null,
        password: null,
        rules: {
            admin: false,
            actions: false,
            settings: false,
            accounting: false,
            management: false,
            admin_actions: false
        }

    }
};

export const getAllUser = createAsyncThunk("uesr/list", UserListThunk);
export const deleteUser = createAsyncThunk("uesr/delete", deleteUserThunk);

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //? all user get
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

        //?delete user
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            console.log(payload.data)
        });
        builder.addCase(deleteUser.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده لطفا مجدد تلاش کنید ", info);
        });
    },
});

export const { } = user.actions;
export default user.reducer;
