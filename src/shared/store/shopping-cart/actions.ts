import { ShoppingCartActionType } from './types';
import { Product } from 'src/shared/entities/products';
import { AsyncAction, AsyncDispatch } from 'src/shared/entities/thunkArgs';
import { displayToastAction, removeToast } from '../toast/actions';

export const saveProductAction = (data: Product): ShoppingCartActionType => ({
  type: '[Shopping Cart] Add Shopping Cart',
  payload: data,
});

export const removeProductAction = (
  data: Product[]
): ShoppingCartActionType => ({
  type: '[Shopping Cart] Remove Shopping Cart',
  payload: data,
});

export const updateProductAction = (
  data: Product[]
): ShoppingCartActionType => ({
  type: '[Shopping Cart] Update Shopping Cart Product',
  payload: data,
});

export function addProduct(product: Product): AsyncAction {
  return async (dispatch: AsyncDispatch) => {
    const ToastMessage = {
      message: 'Product save successful',
      active: true,
      type: 'success',
    };
    dispatch(saveProductAction(product));
    dispatch(displayToastAction(ToastMessage));
    dispatch(removeToast());
  };
}

export function removeProduct(products: Product[]): AsyncAction {
  return async (dispatch: AsyncDispatch) => {
    const ToastMessage = {
      message: 'Product removed successfully',
      active: true,
      type: 'success',
    };
    dispatch(removeProductAction(products));
    dispatch(displayToastAction(ToastMessage));
    dispatch(removeToast());
  };
}

export function updateProduct(products: Product[]): AsyncAction {
  return async (dispatch: AsyncDispatch) => {
    dispatch(updateProductAction(products));
  };
}
