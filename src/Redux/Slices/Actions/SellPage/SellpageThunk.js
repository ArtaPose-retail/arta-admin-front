import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const addProdOrderThunk = async (orderId, ThunkApi) => {
    const state = ThunkApi.getState();
    const { product_id, quantity } = state.sellPage.singleOrder;
    return await AXIOS.post(apiRouts.factor.checkout.addProd(orderId), {
        product_id,
        quantity,
    });
};
