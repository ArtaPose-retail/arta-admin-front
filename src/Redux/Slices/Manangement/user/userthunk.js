import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

//?get all the users
export const UserListThunk = async () => {
    return AXIOS.get(`${apiRouts.user.list}?userType=User`);
};
