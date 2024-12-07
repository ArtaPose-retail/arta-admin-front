
import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";


export const GetOrderList = async () => {
    return await AXIOS.get(`${apiRouts.order.list}?cartfinilize=false`)
}


export const addnewOrder = async (_, ThunkApi) => {

    const state = ThunkApi.getState()
    const { transactionInfo } = state.sellPage
    return await AXIOS.post(apiRouts.order.add, {
        // cust_id: transactionInfo?.user_id,
        status_id: 0
    })
}

export const GetSingleOrderProd = async (order_id) => {
    return await AXIOS.get(apiRouts.order.listById(order_id))
}

export const CalculateOrder = async (order_id, ThunkApi) => {
    const state = ThunkApi.getState()
    const { promoCode } = state.Order
    return await AXIOS.post(apiRouts.factor.checkout.ClcPrice(order_id), {
        promocode: promoCode
    })
}



export const RemoveOrder = async (order_id) => {
    return await AXIOS.delete(`${apiRouts.order.list}${order_id}`)
}

export const FinilizeOrder = async (order_id, ThunkApi) => {
    const state = ThunkApi.getState()
    const { promoCode } = state.Order
    const { transactionInfo } = state.sellPage
    return await AXIOS.post(apiRouts.factor.checkout.finilize(order_id), {
        allow_debt: true,
        promo_code: promoCode,
        customer_id: transactionInfo?.id
    })
}