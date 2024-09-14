import apiRouts from "../../../../../utils/apiRouts"
import AXIOS from "../../../../../utils/setting"

export const TypeThunk = async () => {
    return await AXIOS.get(apiRouts.product.type.getList)
}
export const TypeDeleteThunk = async (id) => {
    return await AXIOS.delete(`${apiRouts.product.type.getList}${id}`)
}
export const TypeAddThunk = async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { NewType } = state.productType
    return await AXIOS.delete(apiRouts.product.type.add, {
        NewType
    })
}