import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const GetPaymentBA = async () => {
    return await AXIOS.get(apiRouts.payment.bankaccount)
}