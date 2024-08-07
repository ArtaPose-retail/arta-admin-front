import { configureStore } from "@reduxjs/toolkit";

import addCardReducer from "../Redux/Slices/Banking/addcard"
import generalReducer from "./Slices/general"
import factorReducer from "./Slices/HomePage/factor"
import productReducer from "./Slices/HomePage/product"
import ProductinformationReducer from "./Slices/HomePage/Productinformation"
import WalletReducer from "./Slices/Wallet/wallet"
import KeyboardReducer from "./Slices/Keyboard/keyboard"

export const store = configureStore({
    reducer: {

        addCard: addCardReducer,
        general: generalReducer,
        factor: factorReducer,
        product: productReducer,
        Productinformation: ProductinformationReducer,
        wallet: WalletReducer,
        keyboard: KeyboardReducer

    }
})

