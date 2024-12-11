import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import axios from "axios";
import moment from "jalali-moment";
import { useSelector } from "react-redux";

const instance = axios.create({
    // baseURL: "/v1",
    baseURL: "https://api.artps.ir/v1",
    timeout: 60000,
});

instance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json; charset=utf-8";
        config.headers["Accept"] = "application/json";
        let token = "";
        // if (typeof window !== "undefined") {
        // token = JSON.parse(localStorage.getItem("TOKEN"));
        token = localStorage.getItem("TOKEN");
        // }
        if (token) {
            config.headers["Authorization"] = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error, "error in response of the request");

        return Promise.reject(error);
    }
);
export default instance;

export const separateBy4 = (number) => {
    return number?.match(/.{1,4}/g);
};

export const separateBy3 = (number) => {
    return addCommas(number);
};
export const toPersian = (str) => {
    return digitsEnToFa(str);
};

export const persianDate = (date) => {
    return date != null
        ? digitsEnToFa(
            moment(date, "YYYY-MM-DD").locale("fa").format(" D MMM  YYYY")
        )
        : "_";
};
export const persianTime = (data) => {
    return digitsEnToFa(
        moment(data ?? new Date(), "YYYY-MM-DD")
            .locale("fa")
            .format("LT")
    );
};

import { toast } from "react-toastify";
export const toastHandler = (msg, variant) => {
    toast[variant](msg, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const ruleChecker = (rules) => {
    const translations = {
        admin: "مدیر",
        actions: "عملیات",
        settings: "تنظیمات",
        accounting: "حسابداری",
        management: "مدیریت",
        admin_actions: "مدیر عملیات",
    };
    const result = [];
    for (let key in rules) {
        if (rules[key]) {
            result.push(translations[key]);
        }
    }
    return result;
};

export const checkAccess = (requiredRole) => {
    const admission = useSelector((state) => state.auth.admission);
    const hasAccess = requiredRole.some((role) => admission[role]);

    return hasAccess;
};

//!factor

export const sumSell = (fee_sell, quantity) => {
    if (fee_sell != null && quantity != null) {
        return fee_sell * quantity;
    } else {
        return 0;
    }
};
export const Discount = (original_fee_sell, fee_sell) => {
    if (original_fee_sell != null && fee_sell != null) {
        return original_fee_sell - fee_sell;
    } else {
        return 0;
    }
};

export const TotalBuy = (initial_buy_price, quantity, tax) => {
    if (initial_buy_price != null && quantity != null && tax != null) {
        return initial_buy_price * quantity + tax;
    } else {
        return 0;
    }
};


export const FinalBuyFee = (total_buy, discount, quantity) => {
    return (total_buy - discount) / quantity
}

export const profitPercentage = (FinalBuyFee, unitprice) => {

    return ((unitprice - FinalBuyFee) / FinalBuyFee) * 100

}

export const DiscountPercentage = (discount, original_price) => {
    if (original_price != null) {
        return (discount * 100) / original_price
    } else {
        return 0
    }
}