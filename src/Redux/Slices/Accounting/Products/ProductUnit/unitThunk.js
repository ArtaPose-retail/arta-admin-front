import apiRouts from "../../../../../utils/apiRouts"
import AXIOS from "../../../../../utils/setting"

export const getUnitListThunk = async () => {
    return await AXIOS(apiRouts.product.unit.getList)
}