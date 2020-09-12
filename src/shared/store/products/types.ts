import { Product } from '../../entities/products';

export type ProductsActionType =
  | { type: '[Products] List products' }
  | { type: '[Products] List products success'; payload: Product[] }
  | {
      type: '[Products] List products error';
      payload: string;
    }
  | { type: '[Products] Product detail' }
  | { type: '[Products] Product detail success'; payload: Product }
  | {
      type: '[Products] Product detail error';
      payload: string;
    }
  | {
      type: '[Products] save word';
      payload: string;
    };
