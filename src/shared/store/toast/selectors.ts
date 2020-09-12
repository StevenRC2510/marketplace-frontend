import { ReduxStore } from 'src/shared/entities/reduxStore';

export const getToast = (state: ReduxStore) => {
  return state.toast;
};
