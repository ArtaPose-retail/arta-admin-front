import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

//?get all the users
export const UserListThunk = async (Type) => {
    return await AXIOS.get(`${apiRouts.user.list}?userType=${Type}`);
};

//?delete specific users
export const deleteUserThunk = async (id) => {
    return await AXIOS.delete(`${apiRouts.user.list}${id}`);
};

//?add  users
export const addUserThunk = async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { user_type, fname, lname, username, password, rule, phone } =
        state.user.UserInfo;

    return await AXIOS.post(apiRouts.user.add, {
        user_type,
        fname,
        lname,
        username,
        password,
        rule,
        phone
    });
};

export const editUserThunk = async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const { user_type, fname, lname, username, password, rule } =
        state.user.UserInfo;
    return await AXIOS.put(`${apiRouts.user.list}${id}`, {
        user_type,
        fname,
        lname,
        username,
        password,
        rule,
    });
};
