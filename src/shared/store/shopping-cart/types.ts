import { Product } from '../../entities/products';

export type ShoppingCartActionType =
  | { type: '[Shopping Cart] Add Shopping Cart'; payload: Product }
  | { type: '[Shopping Cart] Remove Shopping Cart'; payload: Product[] }
  | {
      type: '[Shopping Cart] Update Shopping Cart Product';
      payload: Product[];
    };
