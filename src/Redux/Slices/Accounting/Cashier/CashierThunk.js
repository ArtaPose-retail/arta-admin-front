import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const GetCahierData = async () => {
    return await AXIOS.get(apiRouts.cashier.list);
};
export const GetseleInfo = async () => {
    return await AXIOS.get(apiRouts.cashier.seles);
};
