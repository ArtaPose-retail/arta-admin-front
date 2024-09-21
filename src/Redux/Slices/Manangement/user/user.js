import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUserThunk, deleteUserThunk, editUserThunk, UserListThunk } from "./userthunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    userList: null,
    UserInfo: {
        user_type: "User",
        fname: null,
        lname: null,
        username: null,
        password: null,
        rule: {
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
export const addUser = createAsyncThunk("uesr/add", addUserThunk);
export const editUser = createAsyncThunk("uesr/edit", editUserThunk);

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (state, { payload }) => {
            state.UserInfo[payload.key] = payload.value
        },
        setUserRule: (state, { payload }) => {
            console.log(payload)
            state.UserInfo.rule[payload.key] = payload.value
        },
        resSetUserInfo: (state) => {
            state.UserInfo = initialState.UserInfo
        }
    },
    extraReducers: (builder) => {
        //? all user get
        builder.addCase(getAllUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.userList = payload.data;
        });
        builder.addCase(getAllUser.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده لطفا مجدد وارد شوید", "info");
        });

        //?delete user
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;

            console.log(payload.data)
        });
        builder.addCase(deleteUser.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده لطفا مجدد تلاش کنید ", "info");
        });

        //?add user
        builder.addCase(addUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
        });
        builder.addCase(addUser.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده لطفا مجدد تلاش کنید ", "info");
        });

        //?edit user
        builder.addCase(editUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(editUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
        });
        builder.addCase(editUser.rejected, (state, { payload }) => {
            state.loading = false,
                console.log(payload)
            toastHandler("مشکلی پیش امده لطفا مجدد تلاش کنید ", "info");
        });
    },
});

export const { setUserInfo, setUserRule, resSetUserInfo } = user.actions;
export default user.reducer;
