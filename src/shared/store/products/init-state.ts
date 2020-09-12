import { ProductsState } from 'src/shared/entities/reduxStore';
import { Product } from 'src/shared/entities/products';

const initialState: ProductsState = {
  products: [] as Product[],
  detail: {} as Product,
  searchByWord: '',
  loading: false,
};
export default initialState;
