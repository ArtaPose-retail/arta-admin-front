import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";

export const BankTypeList = async () => {
    return await AXIOS.get(apiRouts.bank.type.list);
};
export const AddBankType = async (_, ThunkApi) => {
    const state = ThunkApi.getState();

    const { title } = state.bankType.newBankType;

    return await AXIOS.post(apiRouts.bank.type.add, {
        title,
    });
};


export const deleteBankType = async (id) => {
    return await AXIOS.delete(`${apiRouts.bank.type.list}${id}`)
}