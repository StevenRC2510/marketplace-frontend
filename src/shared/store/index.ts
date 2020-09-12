import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { AppReducers } from '../store/reducers';
import { AppMiddlewares } from '../store/middlewares';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const history = createBrowserHistory();
export const persistedReducer = persistReducer(
  persistConfig,
  AppReducers(history)
);

export const AppStore = createStore(
  // AppReducers(history),
  persistedReducer,
  AppMiddlewares(history)
);

export const persistor = persistStore(AppStore);
