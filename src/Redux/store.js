

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import logger from "redux-logger";

import { rootReducers } from "./rootReducers";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducers)

export default function storeGenerator() {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
        devTools: process.env.NODE_ENV !== 'production',

    })
    const persistor = persistStore(store)
    return { store, persistor }
}

