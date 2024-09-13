import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import axios from "axios";
import moment from "jalali-moment";
import { useSelector } from "react-redux";

const instance = axios.create({
    baseURL: "https://api.artps.ir/v1/",
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
            config.headers["Authorization"] = `Bearer ${token}`;
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

export const persianDate = (data) => {
    return digitsEnToFa(
        moment(data ?? new Date(), "YYYY-MM-DD")
            .locale("fa")
            .format(" D MMM  YYYY")
    );
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
    const result = []
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

    return hasAccess
}
