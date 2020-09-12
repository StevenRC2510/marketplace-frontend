import { ReduxStore } from 'src/shared/entities/reduxStore';

export const getCategoriesList = (state: ReduxStore) => {
  return state.categories;
};

export const getWordByCategory = (state: ReduxStore) => {
  return state.categories.searchByWord;
};
