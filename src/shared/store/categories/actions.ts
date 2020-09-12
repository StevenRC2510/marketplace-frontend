import { CategoriesActionType } from './types';
import { Category } from 'src/shared/entities/categories';
import { AsyncAction, AsyncDispatch } from 'src/shared/entities/thunkArgs';
import { ReduxStore } from 'src/shared/entities/reduxStore';

export const fetchCategories = (): CategoriesActionType => ({
  type: '[Categories] List categories',
});

export const fetchCategoriesSuccess = (
  data: Category[]
): CategoriesActionType => ({
  type: '[Categories] List categories success',
  payload: data,
});

export const fetchCategoriesError = (
  message: string
): CategoriesActionType => ({
  type: '[Categories] List categories error',
  payload: message,
});

export const saveCategoryByWord = (word: string): CategoriesActionType => ({
  type: '[Categories] save word',
  payload: word,
});

export function categoriesList(): AsyncAction {
  return async (
    dispatch: AsyncDispatch,
    getStore: () => ReduxStore,
    { api }
  ) => {
    dispatch(fetchCategories());
    try {
      const responseCategories = await api.categoriesService.categoriesList();
      dispatch(fetchCategoriesSuccess(responseCategories));
    } catch (error) {
      dispatch(fetchCategoriesError(error));
    }
  };
}
