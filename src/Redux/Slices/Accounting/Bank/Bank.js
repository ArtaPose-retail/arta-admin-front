import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    update: false,
    bankList: [],
    newBackAccount: {

    }
}

export const bank = createSlice({
    name: "bank",
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})


export const { } = bank.actions;
export default bank.reducer;