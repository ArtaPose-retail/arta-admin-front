import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const getDocList = async (page) => {
    return await AXIOS.get(apiRouts.document.list(page))
}