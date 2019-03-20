import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
);
export const persistor = persistStore(store);
