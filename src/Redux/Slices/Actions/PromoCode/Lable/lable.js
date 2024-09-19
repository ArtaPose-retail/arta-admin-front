import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPromoList, deletePromoList, getPromoList } from "./lableThunk";
import { toastHandler } from "../../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    newPromoInfo: {
        type: "",
        amount: "",
        from_amount: "",
        to_amount: "",
        started_time: "",
        end_time: "",
        code: "",
        used_count: "",
        orderlimit: "",
        how_many: "",
    },
    promoList: [],
};

export const getList = createAsyncThunk("PC/get list", getPromoList);
export const deletePC = createAsyncThunk("PC/delete", deletePromoList);
export const addPC = createAsyncThunk("PC/add", addPromoList);

export const lable = createSlice({
    name: "lable",
    initialState,

    reducers: {
        setNewLableinfo: (state, { payload }) => {
            state.newPromoInfo[payload.key] = payload.value;
        },

        resetForm: (state) => {
            state.newPromoInfo = initialState.newPromoInfo;
        },
    },

    extraReducers: (builder) => {
        //? get list
        builder.addCase(getList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = false;
            state.promoList = payload.data.data;
        });
        builder.addCase(getList.rejected, (state) => {
            state.loading = false;
        });

        //?delte
        builder.addCase(deletePC.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deletePC.fulfilled, (state) => {
            state.loading = false;
            state.update = true;
            toastHandler("با موفقیت حذف شد", "info");
        });
        builder.addCase(deletePC.rejected, (state) => {
            state.loading = false;
        });
        //?add
        builder.addCase(addPC.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addPC.fulfilled, (state) => {
            state.loading = false;
            state.update = true;
            toastHandler("با موفقیت ثبت شد", "info");
        });
        builder.addCase(addPC.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setNewLableinfo, resetForm } = lable.actions;

export default lable.reducer;