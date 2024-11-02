
import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";


export const GetOrderList = async () => {
    return await AXIOS.get(`${apiRouts.order.list}?cartfinilize=false`)
}


export const addnewOrder = async (_, ThunkApi) => {

    const state = ThunkApi.getState()
    const { transactionInfo } = state.sellPage
    return await AXIOS.post(apiRouts.order.add, {
        cust_id: transactionInfo?.user_id,
        order_type: 0,
        status_id: 0
    })
}

export const GetSingleOrderProd = async (order_id) => {
    return await AXIOS.get(apiRouts.order.listById(order_id))
}