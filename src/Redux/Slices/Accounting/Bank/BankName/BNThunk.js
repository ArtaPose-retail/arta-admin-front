import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";
export const BNList = async () => {
    return await AXIOS.get(apiRouts.bank.name.list);
};
