const base = "/api";
const apiRouts = {
    baseUrl: "https://api.artps.ir",
    wallet: {
        transactiomn: base + "/transaction",
    },
    auth: {
        login: "/user/login",
    },
    user: {
        list: "/admin/users/",
        add: "/admin/users/new",
    },
    product: {
        type: {
            getList: "/admin/categories/",
            delete: "/admin/categories/",
            add: "/admin/categories/new",
            child: "/admin/categories/child",
        },
        unit: {
            getList: "/admin/units/",
        },
        main: {
            list: "/admin/products/",
            add: "/admin/products/new",
        },
    },
    promoCode: {
        getList: "/admin/promocode/",
        add: "/admin/promocode/new",
    },

    setting: {
        gallery: {
            list: "/admin/gallery/",
        },
    },
    order: {
        list: "/admin/order/",
        add: "/admin/order/checkout/new",
        listById: (order_id) => `/admin/order/${order_id}/product`,
    },

    bank: {
        name: {
            list: "/admin/bankaccount/names/",
            add: "/admin/bankaccount/names/new",
        },
        type: {
            list: "/admin/bankaccount/types/",
            add: "/admin/bankaccount/types/new",
        },
        account: {
            add: "/admin/bankaccount/new",
            list: "/admin/bankaccount/",
        },
        otp: {
            req: "/user/bankotprequest",
            verify: "/user/bankotpverify",
        },
    },
    factor: {
        checkin: {
            details: {
                add: "/admin/order/checkin/new",
            },
            items: {
                add: (orderId) => `/admin/order/checkin/${orderId}/product`,
                list: (order_id) => `/admin/order/${order_id}/product`,
                delete: (order_id, op_id) =>
                    `/admin/order/${order_id}/product/${op_id}`,
                edit: (op_id) => `/admin/order/checkin/${op_id}/product`,
            },
            finilize: {
                main: "/admin/order/checkin/",
            },
        },

        checkout: {
            addProd: (order_id) => `/admin/order/checkout/${order_id}/product`,
            ClcPrice: (order_id) => `/admin/order/checkout/${order_id}/calc`,
            finilize: (order_id) => `/admin/order/checkout/${order_id}`,
        },
    },
    payment: {
        bankaccount: "/admin/transaction/bankaccount",
        orderpayList: "/admin/subtransaction/list",
        new: "/admin/transaction/new",
        profile: "/admin/transaction/profiles",
    },
    document: {
        list: "/admin/transaction/list?limit=50&offset=0",
    },
    cashier: {
        list: "/admin/transaction/cashier",
        seles: "/admin/transaction/sales"
    },
};

export default apiRouts;
