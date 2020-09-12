import { ToastActionType } from './types';
import { ToastState } from 'src/shared/entities/reduxStore';
import initialState from './init-state';

export function toastReducer(
  state: ToastState = initialState,
  action: ToastActionType
): ToastState {
  switch (action.type) {
    case '[Toast] Display toast': {
      const { message, active, type } = action.payload;
      return {
        ...state,
        active,
        message,
        type,
      };
    }
    case '[Toast] Remove toast': {
      return initialState;
    }
    case '[Toast] Clear toast': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
