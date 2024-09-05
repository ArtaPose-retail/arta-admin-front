const base = "/api";
const apiRouts = {
    wallet: {
        transactiomn: base + "/transaction",
    },
    auth: {
        login: "user/login"
    },
    user: {
        list: "admin/users/",
    }
};

export default apiRouts;
