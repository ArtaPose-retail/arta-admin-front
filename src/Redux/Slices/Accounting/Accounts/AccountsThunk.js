import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const getAccountList = async () => {
    return await AXIOS.get(apiRouts.payment.profile)
}