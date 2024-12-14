import AXIOS from "../../../utils/setting";
import apiRouts from "../../../utils/apiRouts";

export const LoginThunk = async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { emailorphone, password, rememberme } = state.auth.loginInfo;
    return AXIOS.post(apiRouts.auth.login, {
        emailorphone,
        password,
        rememberme,
    });
};
