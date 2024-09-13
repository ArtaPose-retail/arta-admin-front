import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginThunk } from "./ApiCall";
import { toastHandler } from "../../../utils/setting";
const initialState = {
    loading: false,
    token: null,
    admission: [],
    loginInfo: {
        emailorphone: "",
        password: "",
        rememberme: true,
    },
};

export const LoginAction = createAsyncThunk("auth/login", LoginThunk);

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {

        setLogininfo: (state, { payload }) => {
            state.loginInfo[payload.key] = payload.value
        },
        resetLoginInfo: (state) => {
            state.loginInfo = initialState.loginInfo
        }
    },
    extraReducers: (builder) => {
        //? login
        builder.addCase(LoginAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(LoginAction.fulfilled, (state, { payload }) => {
            state.loading = false;
            console.log(payload.data)
            state.token = payload.data.token,
                state.admission = payload.data.perm,
                window.location.pathname = "/",
                localStorage.setItem("TOKEN", payload.data.token)
        });
        builder.addCase(LoginAction.rejected, (state) => {
            (state.loading = false),
                toastHandler("مشکلی پیش امده لطفا مجدد وارد شوید", "info");
        });

    },
});

export const { setLogininfo, resetLoginInfo } = auth.actions;
export default auth.reducer;
