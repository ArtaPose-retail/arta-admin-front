import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import axios from "axios";
import moment from "jalali-moment";


const instance = axios.create({
    baseURL: "https://api.artps.ir/v1/",
    timeout: 60000,
});

instance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json; charset=utf-8";
        config.headers["Accept"] = "application/json";
        let token = "";
        if (typeof window !== "undefined") {
            token = JSON.parse(localStorage.getItem("TOKEN"));
        }
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
        console.log("error in response of the request");

        return Promise.reject(error);
    }
);
export default instance;



export const separateBy4 = (number) => {
    return number?.match(/.{1,4}/g);
};


export const separateBy3 = (number) => {

    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return addCommas(number);
}
export const toPersian = (str) => {

    return digitsEnToFa(str);
}


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

import { toast } from "react-toastify"
export const toastHandler = (msg, variant) => {
    toast[variant](msg, {
        position: 'bottom-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
