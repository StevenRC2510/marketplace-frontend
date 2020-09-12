import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { MicroserviceApi } from '../api/';
import { ReduxStore } from './reduxStore';

interface ThunksArgs {
  api: MicroserviceApi;
}
export type AsyncAction = ThunkAction<
  Promise<void>,
  ReduxStore,
  ThunksArgs,
  AnyAction
>;
export type AsyncDispatch = ThunkDispatch<ReduxStore, ThunksArgs, AnyAction>;
