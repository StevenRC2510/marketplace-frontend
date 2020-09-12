import { ReduxStore } from 'src/shared/entities/reduxStore';

export const getShoppingCart = (state: ReduxStore) => {
  return state.shoppingCart;
};
