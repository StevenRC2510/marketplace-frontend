import initialState from './init-state';
import { CategoriesState } from 'src/shared/entities/reduxStore';
import { CategoriesActionType } from './types';

export function categoriesReducer(
  state: CategoriesState = initialState,
  action: CategoriesActionType
): CategoriesState {
  switch (action.type) {
    case '[Categories] List categories': {
      return {
        ...state,
        loading: true,
      };
    }
    case '[Categories] List categories success': {
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    }
    case '[Categories] List categories error': {
      return {
        ...state,
        loading: false,
      };
    }
    case '[Categories] save word': {
      return {
        ...state,
        searchByWord: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
