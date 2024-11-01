import { combineReducers } from "@reduxjs/toolkit";

import addCard from "./Slices/Banking/addcard";
import general from "./Slices/general";
import factor from "./Slices/HomePage/factor";
import wallet from "./Slices/Wallet/wallet";
import keyboard from "./Slices/Keyboard/keyboard";
import auth from "./Slices/Auth/auth";
import user from "./Slices/Manangement/user/user";
import productType from "./Slices/Accounting/Products/ProductType/Type";
import lable from "./Slices/Actions/PromoCode/Lable/lable";
import product from "./Slices/Accounting/Products/product";
import transactionsSlice from "./Slices/Accounting/Transactions/transactionsSlice";
import sellPage from "./Slices/Actions/SellPage/sellPage";
import gallery from "./Slices/Setting/Gallery/gallery";
import productUnit from "./Slices/Accounting/Products/ProductUnit/unit";
import Order from "./Slices/Actions/Order/Order";
import bank from "./Slices/Accounting/Bank/Bank";
import bankName from "./Slices/Accounting/Bank/BankName/bankName";
import bankType from "./Slices/Accounting/Bank/BankType/bankType";
import factorDetails from "./Slices/Accounting/Factor/FactorDetails/details";
import factorItems from "./Slices/Accounting/Factor/FactorItems/factorItems";

const appReducer = combineReducers({
    auth,
    user,
    addCard,
    general,
    factor,
    wallet,
    keyboard,
    lable,
    productType,
    product,
    transactionsSlice,
    sellPage,
    gallery,
    productUnit,
    Order,
    bank,
    bankName,
    bankType,
    factorDetails,
    factorItems
});

export const rootReducers = (state, action) => {
    return appReducer(state, action);
};
