import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchReducer from "./searchHandle";
import themeChangeReducer from "./themeChanger";


const rootReducer = combineReducers(
    {
        search: searchReducer,
        theme: themeChangeReducer,
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