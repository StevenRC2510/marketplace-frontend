import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import CategoriesList from 'src/components/organisms/categories-list';
import { categoriesList } from 'src/shared/store/categories/actions';
import {
  getCategoriesList,
  getWordByCategory,
} from 'src/shared/store/categories/selectors';
import { transformArrayCategories } from 'src/helpers/categories';
import { Category } from 'src/shared/entities/categories';
import Loading from 'src/components/atoms/loading';

const Home = () => {
  const dispatch = useDispatch();
  const categoriesStore = useSelector(getCategoriesList);
  const searchByWord = useSelector(getWordByCategory);
  const [categories, setCategories] = useState<Category[]>(
    categoriesStore.categories
  );

  useEffect(() => {
    dispatch(categoriesList());
  }, [dispatch]);

  useEffect(() => {
    if (!categoriesStore.loading) {
      const newArrayCategories = transformArrayCategories(
        categoriesStore.categories,
        searchByWord
      );
      setCategories(newArrayCategories);
    }
  }, [categoriesStore, searchByWord]);

  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        {categoriesStore.loading ? (
          <Loading />
        ) : (
          <CategoriesList data={categories} />
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
