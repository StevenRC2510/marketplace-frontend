import { Toast } from 'src/shared/entities/global';

export type ToastActionType =
  | {
      type: '[Toast] Display toast';
      payload: Toast;
    }
  | { type: '[Toast] Clear toast' }
  | { type: '[Toast] Remove toast' };
