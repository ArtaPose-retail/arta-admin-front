import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS from "../../../utils/setting";
import { toastHandler } from "../../../utils/setting";
const initialState = {
    formInformation: {
        bankName: "",
        accountNum: "",
        sheba: "",
        cardNum: "",
        cvv2: "",
        expireDate: "",
        accountType: "",
        branchName: "",
        branchCode: "",
        fullname: "",
        mobile: "",
        API_IP: "",
        API_TERMENAL: "",
        posName: "",
        bankUrl: "",
        userName: "",
        password: "",
    },
    checkBox: {
        poseGroup: false,
        active: false,
        checkBook: false,
        internet: false,
        otp: false,
    },
};

export const addCard = createSlice({
    name: "addCard",
    initialState,

    reducers: {
        setFormInfo: (state, { payload }) => {
            state.formInformation[payload.key] = payload.value;
        },
        chelkBoxhandler: (state, { payload }) => {
            state.checkBox[payload.key] = payload.value;
        },
        resetForm: (state, action) => {
            state.formInformation = {
                bankName: "",
                displayName: "",
                accountNum: "",
                sheba: "",
                cardNum: "",
                cvv2: "",
                expireDate: "",
                accountType: "",
                branchName: "",
                branchCode: "",
                fullname: "",
                mobile: "",
                API_IP: "",
                API_TERMENAL: "",
                posName: "",
                bankUrl: "",
                userName: "",
                password: "",
            };
        },

    },

    extraReducers: (builder) => { },
});

export const { setFormInfo, chelkBoxhandler, resetForm } = addCard.actions;

export default addCard.reducer;
