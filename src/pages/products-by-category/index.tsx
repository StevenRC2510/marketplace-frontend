import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import ProductList from 'src/components/organisms/products-list';
import BackHeader from 'src/components/molecules/back';
import { productsList } from 'src/shared/store/products/actions';
import {
  getProductsList,
  getProductsByWord,
} from 'src/shared/store/products/selectors';
import { Product } from 'src/shared/entities/products';
import { transformArrayProducts } from 'src/helpers/products';
import Loading from 'src/components/atoms/loading';

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const productsStore = useSelector(getProductsList);
  const searchByWord = useSelector(getProductsByWord);
  const [, , , , currentCategory] = window.location.href.split('/');
  const [products, setProducts] = useState<Product[]>(productsStore.products);

  useEffect(() => {
    dispatch(productsList(currentCategory));
  }, [dispatch, currentCategory]);

  useEffect(() => {
    if (!productsStore.loading) {
      const newArrayProducts = transformArrayProducts(
        productsStore.products,
        searchByWord
      );
      setProducts(newArrayProducts);
    }
  }, [productsStore, searchByWord]);

  return (
    <Grid container direction='column'>
      <BackHeader>Home</BackHeader>
      {productsStore.loading ? <Loading /> : <ProductList data={products} />}
    </Grid>
  );
};

export default ProductsByCategory;
