import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

//?get all the users
export const UserListThunk = async () => {
    return AXIOS.get(`${apiRouts.user.list}?userType=User`);
};


//?delete specific users
export const deleteUserThunk = async (id) => {
    return AXIOS.delete(`${apiRouts.user.list}${id}`);
};
