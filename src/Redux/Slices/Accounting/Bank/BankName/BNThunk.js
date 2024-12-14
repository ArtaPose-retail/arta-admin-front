import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";
export const BNList = async () => {
    return await AXIOS.get(apiRouts.bank.name.list);
};

export const AddBN = async (_, ThunkApi) => {
    const state = ThunkApi.getState();
    const { title, image_name } = state.bankName.newBankName;
    return await AXIOS.post(apiRouts.bank.name.add, {
        name: title,
        title,
        image_name,
    });
};

export const DeleteName = async (id) => {
    return await AXIOS.delete(`${apiRouts.bank.name.list}${id}`)
}
