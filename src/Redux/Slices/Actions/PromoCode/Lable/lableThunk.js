import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";



export const getPromoList = async () => {

    return AXIOS.get(apiRouts.promoCode.getList);
};
export const deletePromoList = async (id) => {

    return AXIOS.delete(`${apiRouts.promoCode.getList}${id}`);
};