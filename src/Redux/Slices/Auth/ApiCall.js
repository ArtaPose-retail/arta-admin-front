import AXIOS from "../../../utils/setting";
import apiRouts from "../../../utils/apiRouts";

export const LoginThunk = async (_, thunkAPI) => {

    const state = thunkAPI.getState()
    console.log(state)
    return AXIOS.post(apiRouts.auth.login);
};
