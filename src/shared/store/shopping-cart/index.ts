import initialState from './init-state';
import { ShoppingCartState } from 'src/shared/entities/reduxStore';
import { ShoppingCartActionType } from './types';

export function shoppingCartReducer(
  state: ShoppingCartState = initialState,
  action: ShoppingCartActionType
): ShoppingCartState {
  switch (action.type) {
    case '[Shopping Cart] Add Shopping Cart': {
      return { ...state, shoppinCart: [...state.shoppinCart, action.payload] };
    }
    case '[Shopping Cart] Remove Shopping Cart': {
      return {
        ...state,
        shoppinCart: action.payload,
      };
    }
    case '[Shopping Cart] Update Shopping Cart Product': {
      return {
        ...state,
        shoppinCart: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
