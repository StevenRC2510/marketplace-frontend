import { ProductsActionType } from './types';
import { Product } from 'src/shared/entities/products';
import { AsyncAction, AsyncDispatch } from 'src/shared/entities/thunkArgs';
import { ReduxStore } from 'src/shared/entities/reduxStore';

export const fetchProductsAction = (): ProductsActionType => ({
  type: '[Products] List products',
});

export const fetchProductsActionSuccess = (
  data: Product[]
): ProductsActionType => ({
  type: '[Products] List products success',
  payload: data,
});

export const fetchProductsActionError = (
  message: string
): ProductsActionType => ({
  type: '[Products] List products error',
  payload: message,
});

export const fetchProductAction = (): ProductsActionType => ({
  type: '[Products] Product detail',
});

export const fetchProductActionSuccess = (
  data: Product
): ProductsActionType => ({
  type: '[Products] Product detail success',
  payload: data,
});

export const fetchProductActionError = (
  message: string
): ProductsActionType => ({
  type: '[Products] Product detail error',
  payload: message,
});

export const saveProductByWord = (word: string): ProductsActionType => ({
  type: '[Products] save word',
  payload: word,
});

export function productsList(categoryId: string): AsyncAction {
  return async (
    dispatch: AsyncDispatch,
    getStore: () => ReduxStore,
    { api }
  ) => {
    dispatch(fetchProductsAction());
    try {
      const responseProducts = await api.productsService.productList(
        categoryId
      );
      dispatch(fetchProductsActionSuccess(responseProducts));
    } catch (error) {
      dispatch(fetchProductsActionError(error));
    }
  };
}

export function productDetail(id: number | string): AsyncAction {
  return async (
    dispatch: AsyncDispatch,
    getStore: () => ReduxStore,
    { api }
  ) => {
    dispatch(fetchProductAction());
    try {
      const responseProduct = await api.productsService.productDetail(id);
      dispatch(fetchProductActionSuccess(responseProduct));
    } catch (error) {
      dispatch(fetchProductActionError(error));
    }
  };
}
