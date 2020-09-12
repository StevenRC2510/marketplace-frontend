import { Product } from './products';
import { Category } from './categories';

export interface CategoriesState {
  categories: Category[];
  searchByWord: string;
  loading: boolean;
}

export interface ProductsState {
  products: Product[];
  detail: Product;
  searchByWord: string;
  loading: boolean;
}

export interface ShoppingCartState {
  shoppinCart: Product[];
}

export interface ToastState {
  message: string;
  active: boolean;
  type: string;
}

export interface ReduxStore {
  router: Record<string, keyof any>;
  categories: CategoriesState;
  products: ProductsState;
  shoppingCart: ShoppingCartState;
  toast: ToastState;
}
