import { CategoriesState } from 'src/shared/entities/reduxStore';
import { Category } from 'src/shared/entities/categories';

const initialState: CategoriesState = {
  categories: [] as Category[],
  searchByWord: '',
  loading: false,
};
export default initialState;
