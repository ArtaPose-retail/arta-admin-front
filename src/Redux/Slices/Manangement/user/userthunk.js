import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";
export const UserListThunk = async () => {
    return AXIOS.get(apiRouts.user.list);
};
