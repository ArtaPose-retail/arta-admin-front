const base = "/api";
const apiRouts = {
    baseUrl: "https://api.artps.ir/v1",
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
        main: {
            list: "admin/products/",
        }
    },
    promoCode: {
        getList: "admin/promocode/",
        add: "admin/promocode/new",
    },

    setting: {
        gallery: {
            list: "admin/gallery/"
        }
    }
};

export default apiRouts;
