import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import {rootReducer} from './reducers';

const persistedReducer = persistReducer(
    {
        key: "@rn-lab3",
        storage: AsyncStorage,
        blacklist: ['previewMode']
    },
    rootReducer,
);


export const store = createStore(persistedReducer, applyMiddleware());
export const persistor = persistStore(store);
