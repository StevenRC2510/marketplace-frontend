import { ReduxStore } from 'src/shared/entities/reduxStore';

export const getProductsList = (state: ReduxStore) => {
  return state.products;
};

export const getProduct = (state: ReduxStore) => {
  return state.products.detail;
};

export const getProductsByWord = (state: ReduxStore) => {
  return state.products.searchByWord;
};
