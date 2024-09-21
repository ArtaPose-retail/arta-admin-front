import apiRouts from "../../../../utils/apiRouts";
import AXIOS from "../../../../utils/setting";

export const TransactionListThunk = async () => {
    return await AXIOS.get(`${apiRouts.user.list}`);
};

export const TransactionDeleteThunk = async (id) => {
    return await AXIOS.delete(`${apiRouts.user.list}${id}`);
};

export const TransactionAddThunk = async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const {
        fname,
        lname,
        user_type,
        phone1,
        phone2,
        phone3,
        home_address,
        referer,
        shmeli
    } = state.transactionsSlice.newTransaction;
    return await AXIOS.post(apiRouts.user.add, {
        fname,
        lname,
        user_type,
        phone1,
        phone2,
        phone3,
        home_address,
        referer,
        shmeli,
        username: `${fname}@${phone1}`
    });
};
