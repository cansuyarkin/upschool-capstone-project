import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favReducer from "./favorites";
import genreReducer from "./genres";
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
        genres: genreReducer,
        favorite: favReducer,
    }
);

const persistConfig = {
    key: 'counter',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

store.subscribe(() => console.log("STORE:::", store.getState()))

export const persistor = persistStore(store);

export default store;