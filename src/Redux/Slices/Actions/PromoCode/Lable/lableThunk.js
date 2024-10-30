import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";

export const getPromoList = async (page) => {
    return AXIOS.get(`${apiRouts.promoCode.getList}?limit=100&page=${page}`);
};
export const deletePromoList = async (id) => {
    return AXIOS.delete(`${apiRouts.promoCode.getList}${id}`);
};
export const addPromo = async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const {
        type,
        amount,
        from_amount,
        to_amount,
        started_time,
        end_time,
        orderlimit,
        how_many,
        code,
    } = state.lable.newPromoInfo;
    return AXIOS.post(apiRouts.promoCode.add, {
        type,
        amount,
        from_amount,
        to_amount,
        started_time,
        end_time,
        orderlimit,
        how_many,
        code,
    });
};
