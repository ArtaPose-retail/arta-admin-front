import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS from "../../../utils/setting";

const initialState = {

    productformInformation: {
        genericName: "سیب",
        title: "سیب قرمز سبزوار",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: "",
        transactionParty: "محمد مرادی",
        pureWeight: "45",
        weight: "50",
        number: "12",
        price: "450000",
        description: "توضیحات",

    }
};

export const productinformation = createSlice({
    name: "productinformation",
    initialState,

    reducers: {

        setFormInfo: (state, { payload }) => {
            state.formInformation[payload.key] = payload.value;
        },
    },
    extraReducers: (builder) => { },
});

export const { setFormInfo } = productinformation.actions;

export default productinformation.reducer;
