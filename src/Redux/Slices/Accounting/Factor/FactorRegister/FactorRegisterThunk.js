import apiRouts from "../../../../../utils/apiRouts";
import AXIOS from "../../../../../utils/setting";

export const finilizeFator = async (order_id) => {
    return await AXIOS.post(
        `${apiRouts.factor.checkin.finilize.main}${order_id}`
    );
};
