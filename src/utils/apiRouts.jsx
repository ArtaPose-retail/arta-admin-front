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
        add: "admin/users/new"
    },
    product: {
        type: {
            getList: "admin/categories/",
            delete: "admin/categories/",
            add: 'admin/categories/new'

        }
    }
};

export default apiRouts;
