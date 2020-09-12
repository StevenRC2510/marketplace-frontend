import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const Home = lazy(() => import('../pages/home'));
const ProductsByCategory = lazy(() => import('../pages/products-by-category'));
const ProductDetail = lazy(() => import('../pages/product-detail'));

const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category/:name' exact component={ProductsByCategory} />
        <Route
          path='/category/:name/products/:id'
          exact
          component={ProductDetail}
        />
      </Switch>
    </Suspense>
  );
};

export default withRouter(AppRouter);
