import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddDetails } from "./DetailsThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    newDetail: {
        cust_id: null,
        order_type_id: null,
        orderpublicid: "",
        order_public_date: "",
        bonebagh: "",
        delivery_agent_profile_id: null,
        fee: null,
        extra_expenses: null,
        vehicle_type_id: null,
        license_plate: "",
        weight: null,
        delivery_company_title: "",
        meta: {}
    },
    addDetailRes: null
};

export const AddFactorDetails = createAsyncThunk("factorDetails/add", AddDetails)

export const factorDetails = createSlice({
    name: "factorDetails",
    initialState,

    reducers: {
        setFactorDetailsInfo: (sate, { payload }) => {
            if (payload.key != "expire_date") {

                sate.newDetail[payload.key] = payload.value
            } else {
                sate.newDetail.meta[payload.key] = payload.value
            }
        },
        resetfactorDetailForm: (state) => {
            state.newDetail = initialState.newDetail
        }
    },
    extraReducers: (builder) => {

        builder.addCase(AddFactorDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(AddFactorDetails.fulfilled, (state, { payload }) => {
            state.loading = false,
                toastHandler("با موفقیت ثبت شد", "info")
            state.addDetailRes = payload.data.data
        })
        builder.addCase(AddFactorDetails.rejected, (state) => {
            state.loading = false
            toastHandler(" خطا  ", "info")

        })
    },
});

export const { setFactorDetailsInfo, resetfactorDetailForm } = factorDetails.actions;
export default factorDetails.reducer;
