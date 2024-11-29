import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const GetPaymentBA = async () => {
    return await AXIOS.get(apiRouts.payment.bankaccount)
}

export const GetOrderPayemnt = async (order_id) => {

    return await AXIOS.post(apiRouts.payment.orderpayList, {
        order_id: order_id
    })
}