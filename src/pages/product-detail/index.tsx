import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Avatar } from '@material-ui/core';

import ProductInfo from 'src/components/organisms/product-info';
import PreviewProductImage from 'src/components/organisms/preview-product-image';
import AlertMessage from 'src/components/atoms/alert-message';
import BackHeader from 'src/components/molecules/back';
import { productDetail } from 'src/shared/store/products/actions';
import { getProduct } from 'src/shared/store/products/selectors';
import { addProduct } from 'src/shared/store/shopping-cart/actions';
import { getToast } from 'src/shared/store/toast/selectors';

import { ProductDetailContainer, Message } from './styles';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const productStore = useSelector(getProduct);
  const [quantity, setQuantity] = useState(0);
  const { message, type, active } = useSelector(getToast);
  const [, , , , , , productId] = window.location.href.split('/');

  useEffect(() => {
    dispatch(productDetail(productId));
  }, [dispatch, productId]);

  const addProductToShoppingCart = (): void => {
    const product = { ...productStore, quantity: quantity };
    dispatch(addProduct(product));
  };

  return (
    <Fragment>
      <BackHeader>Products</BackHeader>
      <ProductDetailContainer container>
        <Grid item md={5} xs={12}>
          <PreviewProductImage images={productStore.image} />
        </Grid>
        <Grid item md={7} xs={12}>
          <ProductInfo
            {...productStore}
            onClick={addProductToShoppingCart}
            currentValue={productStore.quantity}
            QuantityProduct={(quantity) => setQuantity(quantity)}
          />
        </Grid>
        <Grid container direction='column' style={{ marginTop: 20 }}>
          {[
            'It has many functionalities and it arrived in excellent condition, I recommend it',
            'Excellent product! Is great',
          ].map((text) => (
            <Grid
              container
              direction='row'
              key={text}
              style={{ marginTop: 20 }}
            >
              <Grid item md={1} xs={12}>
                <Avatar>H</Avatar>
              </Grid>
              <Grid item md={4} xs={12}>
                <Message>{text} </Message>
              </Grid>
            </Grid>
          ))}
        </Grid>
        {active && (
          <AlertMessage message={message} actionType={type} open={active} />
        )}
      </ProductDetailContainer>
    </Fragment>
  );
};

export default ProductDetail;
