import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";

export const addFactorItems = async (OrderID, ThunkAPI) => {
    const state = ThunkAPI.getState();

    const {
        product_id,
        quantity,
        initial_buy_price,
        tax,
        original_price,
        unitprice,
        discount
    } = state.factorItems.newFacrtorItems;
    return await AXIOS.post(apiRouts.factor.checkin.items.add(OrderID), {
        product_id,
        quantity,
        initial_buy_price,
        tax,
        original_price,
        unitprice,
        discount
    });
};

export const OrderItemList = async (order_id) => {
    return await AXIOS.get(apiRouts.factor.checkin.items.list(order_id));
};

export const deleteOrderItemThunk = async ({ order_id, op_id }, _) => {
    return await AXIOS.delete(
        apiRouts.factor.checkin.items.delete(order_id, op_id)
    );
};


export const editFactorItems = async (_, ThunkAPI) => {
    const state = ThunkAPI.getState();

    const {
        product_id,
        quantity,
        initial_buy_price,
        tax,
        original_price,
        unitprice,
        discount,
        id
    } = state.factorItems.newFacrtorItems;
    return await AXIOS.put(apiRouts.factor.checkin.items.edit(id), {
        product_id,
        quantity,
        initial_buy_price,
        tax,
        original_price,
        unitprice,
        discount
    });
};
