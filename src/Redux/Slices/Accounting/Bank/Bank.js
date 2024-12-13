import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewAccount, BankDelete, BankList, BankSingle, EditBank, OTPreq, OTPVerify } from "./BankThunk";
import { toastHandler } from "../../../../utils/setting";
import reactRouts from "../../../../utils/reactRouts";

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
    otpCode: 0
};

export const AddAccount = createAsyncThunk("bank/add", addNewAccount);
export const AccountList = createAsyncThunk("bank/list", BankList);
export const DeleteAccount = createAsyncThunk("bank/delete", BankDelete);
export const SingleAccount = createAsyncThunk("bank/single", BankSingle)
export const EditAccount = createAsyncThunk("bank/edit", EditBank)
export const OTPRequest = createAsyncThunk("bank/otp", OTPreq)
export const VerifyOTP = createAsyncThunk("bank/otpVerify", OTPVerify)

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

        setOtpCode: (state, { payload }) => {
            state.otpCode = payload
        }
    },
    extraReducers: (builder) => {
        //?create
        builder.addCase(AddAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(AddAccount.fulfilled, (state) => {
            state.loading = false;
            state.update = true
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
            state.update = false;
            state.bankList = payload.data.data;
        });
        builder.addCase(AccountList.rejected, (state) => {
            state.loading = false;
        });
        //?delete
        builder.addCase(DeleteAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(DeleteAccount.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.update = true;
            toastHandler("عملیات با موفقیت انجام شد", "info");
        });
        builder.addCase(DeleteAccount.rejected, (state) => {
            state.loading = false;
            toastHandler("عملیات با موفقیت انجام نشد", "info");

        });
        //?get single account
        builder.addCase(SingleAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(SingleAccount.fulfilled, (state, { payload }) => {
            state.loading = false;
            console.log(payload.data.data)
            state.newBackAccount = payload.data.data
        });
        builder.addCase(SingleAccount.rejected, (state) => {
            state.loading = false;
            toastHandler("عملیات با موفقیت انجام نشد", "info");

        });
        //?edit single account
        builder.addCase(EditAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(EditAccount.fulfilled, (state, { payload }) => {
            state.loading = false;
            toastHandler("حساب با موفقیت اضافه شد", "info");
        });
        builder.addCase(EditAccount.rejected, (state) => {
            state.loading = false;
            toastHandler("عملیات با موفقیت انجام نشد", "info");

        });
        //? otp request
        builder.addCase(OTPRequest.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(OTPRequest.fulfilled, (state, { payload }) => {
            state.loading = false;
            toastHandler("otp با موفقیت ارسال شد", "info");
        });
        builder.addCase(OTPRequest.rejected, (state) => {
            state.loading = false;
            toastHandler("عملیات با موفقیت انجام نشد", "error");

        });
        //? otp verify
        builder.addCase(VerifyOTP.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(VerifyOTP.fulfilled, (state, { payload }) => {
            state.loading = false;
            window.location.pathname = reactRouts.banking.main
        });
        builder.addCase(VerifyOTP.rejected, (state) => {
            state.loading = false;
            toastHandler("عملیات با موفقیت انجام نشد", "error");

        });
    },
});

export const { setFormInfo, checkBoxhandler, resetForm, setOtpCode } = bank.actions;
export default bank.reducer;
