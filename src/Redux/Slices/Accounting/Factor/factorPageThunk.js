import apiRouts from "../../../../utils/apiRouts"
import AXIOS from "../../../../utils/setting"

export const GetFactorList = async () => {
    return await AXIOS.get(`${apiRouts.order.list}?cartfinilize=true&invoice=true&sort=DESC&orderBy=created_at`)

}
export const GetfactorDetails = async (order_id) => {
    return await AXIOS.get(apiRouts.order.listById(order_id))
}