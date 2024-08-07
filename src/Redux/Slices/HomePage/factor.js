import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    definNewFactorDialog: {
        open: false,
    },
    factorStep: 1,
    defineFactorStep1: {
        transactionParty: "",
        factorType: "",
        factorNumber: "",
        date: "",
        bane: "",
        driverInformation: "",
        tax: "",
        transport: "",
        others: "",
        carType: "",
        plate: "",
        baskol: "",
    },
};

export const factor = createSlice({
    name: "factor",
    initialState,

    reducers: {
        setdeFactorInfoStep1: (state, { payload }) => {
            state.defineFactorStep1[payload.key] = payload.value;
        },
        handleShowNewFactorDialog: (state, action) => {
            state.definNewFactorDialog.open = action.payload;
        },
        handlefactorStep: (state, { payload }) => {
            if (payload === "increase") {
                state.factorStep = state.factorStep + 1;
            } else if (payload === "decrease") {
                state.factorStep = state.factorStep - 1;
            } else state.factorStep = payload;
        },
    },

    extraReducers: (builder) => { },
});

export const {
    handleShowNewFactorDialog,
    handlefactorStep,
    setdeFactorInfoStep1,
} = factor.actions;

export default factor.reducer;
