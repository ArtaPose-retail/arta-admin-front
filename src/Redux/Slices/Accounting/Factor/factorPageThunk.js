import apiRouts from "../../../../utils/apiRouts"
import AXIOS from "../../../../utils/setting"

export const GetFactorList = async () => {
    return await AXIOS.get(`${apiRouts.order.list}?cartfinilize=true`)

}