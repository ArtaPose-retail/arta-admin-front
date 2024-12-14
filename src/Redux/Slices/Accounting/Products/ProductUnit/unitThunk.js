import apiRouts from "../../../../../utils/apiRouts"
import AXIOS from "../../../../../utils/setting"

export const getUnitListThunk = async () => {
    return await AXIOS.get(apiRouts.product.unit.getList)
}
export const addUnitThunk = async (_, ThunkApi) => {
    const state = ThunkApi.getState()
    const { pu_title } = state.productUnit.addType
    return await AXIOS.post(apiRouts.product.unit.getList, {
        title: pu_title
    })
}
export const deleteUnitThunk = async (id) => {
    return await AXIOS.delete(`${apiRouts.product.unit.getList}${id}`)
}