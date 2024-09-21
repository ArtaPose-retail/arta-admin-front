import { combineReducers } from "@reduxjs/toolkit";

import addCard from "./Slices/Banking/addcard"
import general from "./Slices/general"
import factor from "./Slices/HomePage/factor"
import productinformation from "./Slices/HomePage/productinformation"
import wallet from "./Slices/Wallet/wallet"
import keyboard from "./Slices/Keyboard/keyboard"
import auth from "./Slices/Auth/auth";
import user from "./Slices/Manangement/user/user";
import productType from "./Slices/Accounting/Products/ProductType/Type";
import lable from "./Slices/Actions/PromoCode/Lable/lable";
import product from "./Slices/Accounting/Products/product";
import transactionsSlice from "./Slices/Accounting/Transactions/transactionsSlice";


const appReducer = combineReducers({
    auth,
    user,
    addCard,
    general,
    factor,
    productinformation,
    wallet,
    keyboard,
    lable,
    productType,
    product,
    transactionsSlice
});

export const rootReducers = (state, action) => {
    return appReducer(state, action);
};
