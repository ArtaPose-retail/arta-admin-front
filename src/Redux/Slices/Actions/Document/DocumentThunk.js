import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const getDocList = async () => {
    return await AXIOS.get(apiRouts.document.list)
}