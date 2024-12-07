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

export const addNewPayment = async ({ method, orderId, BAId }, ThunkApi) => {
    const state = ThunkApi.getState();
    const { amount } = state.payment.newPayment;
    const { user_id } = state.auth.loginInfo

    return await AXIOS.post(apiRouts.payment.new, {

        amount: amount,
        bank_account_id: BAId,
        is_order_specific: true,
        method_id: method,
        order_id: orderId,
        sub_transaction_type: "ADVANCE_SETTLEMENT",
        submitter_user_id: user_id,
        transaction_type: "INCOMING"
    })
}