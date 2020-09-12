import { Category } from '../../entities/categories';

export type CategoriesActionType =
  | { type: '[Categories] List categories' }
  | { type: '[Categories] List categories success'; payload: Category[] }
  | {
      type: '[Categories] List categories error';
      payload: string;
    }
  | { type: '[Categories] save word'; payload: string };
