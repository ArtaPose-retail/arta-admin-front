import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const getDocList = async (page) => {
    return await AXIOS.get(apiRouts.document.list(page));
};

export const getDocPayment = async (id) => {
    return await AXIOS.post(apiRouts.payment.orderpayList, {
        transaction_id: id
    });
};
