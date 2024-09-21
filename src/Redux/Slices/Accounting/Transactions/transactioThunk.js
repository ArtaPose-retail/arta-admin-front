import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting"


export const TransactionListThunk = async () => {
    return await AXIOS.get(`${apiRouts.user.list}`);
};