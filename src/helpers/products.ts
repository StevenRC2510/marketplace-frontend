import { Product } from 'src/shared/entities/products';

export const transformArrayProducts = (
  array: Product[],
  word: string
): Product[] => {
  const filterByWord = array.filter(
    (item) =>
      item.product_name.toLowerCase().includes(word.toLowerCase()) ||
      item.color.toLowerCase().includes(word.toLowerCase())
  );
  return filterByWord;
};
