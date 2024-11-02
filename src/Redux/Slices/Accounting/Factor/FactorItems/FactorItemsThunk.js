import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";

export const addFactorItems = async (OrderID, ThunkAPI) => {
    const state = ThunkAPI.getState();

    const {
        product_id,
        quantity,
        buy_price_fee,
        tax,
        original_price_fee,
        sell_price_fee,
    } = state.factorItems.newFacrtorItems;
    return await AXIOS.post(apiRouts.factor.checkin.items.add(OrderID), {
        product_id,
        quantity,
        buy_price_fee,
        tax,
        original_price_fee,
        sell_price_fee,
    });
};

export const OrderItemList = async (order_id) => {
    return await AXIOS.get(apiRouts.factor.checkin.items.list(order_id));
};
