import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paginationReducer from "./paginationHandler";
import searchReducer from "./searchHandle";
import themeChangeReducer from "./themeChanger";
import trendingReducer from "./trending";
import userReducer from "./user";


const rootReducer = combineReducers(
    {
        search: searchReducer,
        theme: themeChangeReducer,
        pagination: paginationReducer,
        trend: trendingReducer,
        user: userReducer,
    }
);

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;