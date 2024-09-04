import { combineReducers } from "@reduxjs/toolkit";

import addCard from "./Slices/Banking/addcard"
import general from "./Slices/general"
import factor from "./Slices/HomePage/factor"
import product from "./Slices/HomePage/product"
import productinformation from "./Slices/HomePage/productinformation"
import wallet from "./Slices/Wallet/wallet"
import keyboard from "./Slices/Keyboard/keyboard"
import auth from "./Slices/Auth/auth";

const appReducer = combineReducers({
    auth,
    addCard,
    general,
    factor,
    product,
    productinformation,
    wallet,
    keyboard
});

export const rootReducers = (state, action) => {
    return appReducer(state, action);
};
