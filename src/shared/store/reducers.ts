import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { categoriesReducer } from './categories/';
import { productsReducer } from './products';
import { shoppingCartReducer } from './shopping-cart/';
import { toastReducer } from './toast';

export const AppReducers = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    categories: categoriesReducer,
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
    toast: toastReducer,
  });
