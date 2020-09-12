import { Toast } from 'src/shared/entities/global';
import { ToastActionType } from './types';
import { AsyncDispatch, AsyncAction } from 'src/shared/entities/thunkArgs';
import { DEFAULT_DELAY } from 'src/shared/constants';

export const displayToastAction = (data: Toast): ToastActionType => ({
  type: '[Toast] Display toast',
  payload: data,
});

export const clearToastAction = (): ToastActionType => ({
  type: '[Toast] Clear toast',
});

export const removeToastAction = (): ToastActionType => ({
  type: '[Toast] Remove toast',
});

export function removeToast(): AsyncAction {
  return async (dispatch: AsyncDispatch) => {
    setTimeout(() => {
      dispatch(removeToastAction());
    }, DEFAULT_DELAY);
  };
}
