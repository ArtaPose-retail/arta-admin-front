import apiRouts from "../../../../utils/apiRouts"
import AXIOS from "../../../../utils/setting"


export const AllProductsThunk = async () => {
    return await AXIOS.get(apiRouts.product.main.list)
}

export const deleteProdThunk = async (id) => {
    return await AXIOS.delete(`${apiRouts.product.main}${id}`)
}