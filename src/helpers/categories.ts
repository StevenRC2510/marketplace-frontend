import { Category } from 'src/shared/entities/categories';

export const transformArrayCategories = (
  array: Category[],
  word: string
): Category[] => {
  const filterByWord = array.filter((item) =>
    item.category_name.toLowerCase().includes(word.toLowerCase())
  );
  return filterByWord;
};
