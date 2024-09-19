import apiRouts from "../../../../utils/apiRouts"
import AXIOS from "../../../../utils/setting"


export const AllProductsThunk = async () => {
    return await AXIOS.get(apiRouts.product.main.list)
}