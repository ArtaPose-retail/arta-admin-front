import apiRouts from "../../../../utils/apiRouts"
import AXIOS from "../../../../utils/setting"


export const getPicThunk = async () => {
     return await AXIOS.get(apiRouts.setting.gallery.list)
}