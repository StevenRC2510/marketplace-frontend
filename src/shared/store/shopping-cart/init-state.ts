import { ShoppingCartState } from 'src/shared/entities/reduxStore';
import { Product } from 'src/shared/entities/products';

const initialState: ShoppingCartState = {
  shoppinCart: [] as Product[],
};
export default initialState;
