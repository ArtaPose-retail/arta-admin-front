const base = "/api";
const apiRouts = {
    baseUrl: "https://api.artps.ir",
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
        unit: {
            getList: "admin/units/",
        },
        main: {
            list: "admin/products/",
            add: "admin/products/new"
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
    },
    order: {
        list: "admin/order/",
        add: "admin/order/new"
    },

    bank: {
        name: {
            list: "admin/bankaccount/names/",
            add: "/admin/bankaccount/names/new"
        },
        type: {
            list: "admin/bankaccount/types/",
            add: "admin/bankaccount/types/new"
        },
        account: {
            add: "/admin/bankaccount/new",
            list: "/admin/bankaccount/"
        }
    },
    factor: {
        checkin: {
            details: {
                add: "/admin/order/checkin/new"
            },
            items: {
                add: (orderId) => `/admin/order/checkin/${orderId}/product`,
                list: (order_id) => `/admin/order/${order_id}/product`

            },
            finilize: {
                main: "/admin/order/checkin/"
            }
        }
    }
};

export default apiRouts;
