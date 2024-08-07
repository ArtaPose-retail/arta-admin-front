import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS, { toastHandler } from "../../../utils/setting";
import apiRouts from "../../../utils/apiRouts";

const initialState = {
    loading: false,
    closeModal: false,
    inceaseCredit: {
        price: "",
        customer_id: "1",
        applicant: ""
    }
}

export const IncreaseCreditAction = createAsyncThunk(
    "wallet/increaseCredit",
    async (_, { getState }) => {
        const state = getState()
        const { price, customer_id, applicant } = state.wallet.inceaseCredit
        return await AXIOS.post(apiRouts.wallet.transactiomn, { price, customer_id, applicant })
    }
)

export const wallet = createSlice({
    name: "wallet",
    initialState,

    reducers: {
        setFormInfo: (state, { payload }) => {
            state.inceaseCredit[payload.key] = payload.value;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(IncreaseCreditAction.pending, (state, { payload }) => {
            state.loading = true;
        });
        builder.addCase(IncreaseCreditAction.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.closeModal = true;
            window.open(payload?.data?.url.replace(/\\/g, '').replace(/"/g, ''))
        });
        builder.addCase(IncreaseCreditAction.rejected, (state, { payload }) => {
            state.loading = false;
            toastHandler("خطا! مجدد امتحان کنید")
        });
    },
})

export const { setFormInfo } = wallet.actions;

export default wallet.reducer;