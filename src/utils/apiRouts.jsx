const base = "/api";
const apiRouts = {
    wallet: {
        transactiomn: base + "/transaction",
    },
    auth: {
        login: "user/login",
    },
    user: {
        list: "admin/users/",
        add: "admin/users/new",
    },
    product: {
        type: {
            getList: "admin/categories/",
            delete: "admin/categories/",
            add: "admin/categories/new",
            child: "admin/categories/child",
        },
    },
    promoCode: {
        getList: "admin/promocode/",
        add: "admin/promocode/new",
    },
};

export default apiRouts;
