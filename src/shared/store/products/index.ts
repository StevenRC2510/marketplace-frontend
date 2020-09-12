import initialState from './init-state';
import { ProductsState } from 'src/shared/entities/reduxStore';
import { ProductsActionType } from './types';

export function productsReducer(
  state: ProductsState = initialState,
  action: ProductsActionType
): ProductsState {
  switch (action.type) {
    case '[Products] List products': {
      return {
        ...state,
        loading: true,
      };
    }
    case '[Products] List products success': {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    }
    case '[Products] List products error': {
      return {
        ...state,
        loading: false,
      };
    }
    case '[Products] Product detail': {
      return {
        ...state,
        loading: true,
      };
    }
    case '[Products] Product detail success': {
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };
    }
    case '[Products] Product detail error': {
      return {
        ...state,
        loading: false,
      };
    }
    case '[Products] save word': {
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
