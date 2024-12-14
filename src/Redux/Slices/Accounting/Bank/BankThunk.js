import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const addNewAccount = async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    const { newBackAccount, checkBox } = state.bank;
    return await AXIOS.post(apiRouts.bank.account.add, {
        bank_id: newBackAccount.bank_id,
        type_id: newBackAccount.type_id,
        account_num: newBackAccount.account_num,
        iban: newBackAccount.iban,
        card_num: newBackAccount.card_num,
        cvv2: newBackAccount.cvv2,
        expier_date: newBackAccount.expier_date,
        branch_name: newBackAccount.branch_name,
        branch_code: newBackAccount.branch_code,
        owner_name: newBackAccount.owner_name,
        owner_phone: newBackAccount.owner_phone,
        api_ip: newBackAccount.api_ip,
        api_terminal: newBackAccount.api_terminal,
        representer_pos_name: newBackAccount.representer_pos_name,
        meta: newBackAccount.meta,
        has_pos: checkBox.has_pos,
        enabled: checkBox.enabled,
        has_check: checkBox.has_check,
        has_internet_bank: checkBox.has_internet_bank,
        has_otp: checkBox.has_otp,
    });
};

export const BankList = async () => {
    return await AXIOS.get(apiRouts.bank.account.list);
};

export const BankDelete = async (id) => {
    return await AXIOS.delete(`${apiRouts.bank.account.list}${id}`)
}
export const BankSingle = async (id) => {
    return await AXIOS.get(`${apiRouts.bank.account.list}${id}`)
}


export const EditBank = async (id, ThunkApi) => {
    const state = ThunkApi.getState();
    const { newBackAccount, checkBox } = state.bank;
    return await AXIOS.put(`${apiRouts.bank.account.list}${id}`, {
        bank_id: newBackAccount.bank_id,
        type_id: newBackAccount.type_id,
        account_num: newBackAccount.account_num,
        iban: newBackAccount.iban,
        card_num: newBackAccount.card_num,
        cvv2: newBackAccount.cvv2,
        expier_date: newBackAccount.expier_date,
        branch_name: newBackAccount.branch_name,
        branch_code: newBackAccount.branch_code,
        owner_name: newBackAccount.owner_name,
        owner_phone: newBackAccount.owner_phone,
        api_ip: newBackAccount.api_ip,
        api_terminal: newBackAccount.api_terminal,
        representer_pos_name: newBackAccount.representer_pos_name,
        meta: newBackAccount.meta,
        has_pos: checkBox.has_pos,
        enabled: checkBox.enabled,
        has_check: checkBox.has_check,
        has_internet_bank: checkBox.has_internet_bank,
        has_otp: checkBox.has_otp,
    });
};

export const OTPreq = async () => {

    return await AXIOS.post(apiRouts.bank.otp.req)
}
export const OTPVerify = async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    const { otpCode } = state.bank
    return await AXIOS.post(apiRouts.bank.otp.verify, {
        otp: otpCode
    })
}
