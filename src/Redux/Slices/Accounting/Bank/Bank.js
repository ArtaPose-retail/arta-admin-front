import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewAccount, BankList } from "./BankThunk";
import { toastHandler } from "../../../../utils/setting";

const initialState = {
    loading: false,
    update: false,
    bankList: [],
    newBackAccount: {
        bank_id: null,
        type_id: null,
        account_num: "",
        iban: "",
        card_num: "",
        cvv2: "",
        expier_date: "",
        branch_name: "",
        branch_code: "",
        owner_name: "",
        owner_phone: "",
        api_ip: "",
        api_terminal: "",
        representer_pos_name: "",
        meta: {
            bankUrl: "",
            userName: "",
            password: "",
        },
    },
    checkBox: {
        has_pos: false,
        enabled: false,
        has_check: false,
        has_internet_bank: false,
        has_otp: false,
    },
};

export const AddAccount = createAsyncThunk("bank/add", addNewAccount);
export const AccountList = createAsyncThunk("bank/list", BankList);

export const bank = createSlice({
    name: "bank",
    initialState,
    reducers: {
        setFormInfo: (state, { payload }) => {
            if (["password", "userName", "bankUrl"].includes(payload.key)) {
                state.newBackAccount.meta[payload.key] = payload.value;
            } else {
                state.newBackAccount[payload.key] = payload.value;
            }
        },
        checkBoxhandler: (state, { payload }) => {
            state.checkBox[payload.key] = payload.value;
        },
        resetForm: (state) => {
            (state.newBackAccount = initialState.newBackAccount),
                (state.checkBox = initialState.checkBox);
        },
    },
    extraReducers: (builder) => {
        //?create
        builder.addCase(AddAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(AddAccount.fulfilled, (state) => {
            state.loading = false;
            toastHandler("حساب با موفقیت اضافه شد", "info");
        });
        builder.addCase(AddAccount.rejected, (state) => {
            state.loading = false;
        });
        //?list
        builder.addCase(AccountList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(AccountList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.bankList = payload.data.data;
        });
        builder.addCase(AccountList.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setFormInfo, checkBoxhandler, resetForm } = bank.actions;
export default bank.reducer;
