import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, IconButton } from '@material-ui/core';
import { getShoppingCart } from 'src/shared/store/shopping-cart/selectors';
import { emptyProducts } from 'src/assets/images';
import { calculateTotalValue, dictionaryCurrency } from 'src/helpers/currency';
import { removeProduct } from 'src/shared/store/shopping-cart/actions';
import { Product } from 'src/shared/entities/products';
import Divider from '@material-ui/core/Divider';
import Label from 'src/components/atoms/label';
import Operations from 'src/components/molecules/operations';
import Image from 'src/components/atoms/image';
import DeleteIcon from '@material-ui/icons/Delete';
import DataZero from '../data-zero';

import { ListContainer, CheckoutContainer } from './styles';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { shoppinCart } = useSelector(getShoppingCart);

  const removeProductAtCart = (id: string): void => {
    const productRemoved = shoppinCart.filter(({ _id }) => _id !== id);
    dispatch(removeProduct(productRemoved));
  };

  const update = (productUpdated: Product): void => {
    return;
  };

  return (
    <ListContainer>
      <Label bold size='20px'>
        {' '}
        Products added{' '}
      </Label>
      <Divider />
      {shoppinCart.length > 0 ? (
        shoppinCart.map((product, index) => (
          <Grid
            key={`product-${product.product_name}-${index}`}
            container
            className='products-container'
          >
            <Grid item xs={12} md={2}>
              <Image
                src={product.image[0]}
                alt={`productimage-${index}`}
                height={50}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Label bold size='12px'>
                {' '}
                {product.product_name}{' '}
              </Label>
            </Grid>
            <Grid item xs={12} md={3}>
              <Operations
                currentValue={product.quantity}
                valueChanged={(quantity) => update({ ...product, quantity })}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <div className='price'>
                <Label bold size='12px'>
                  {' '}
                  {dictionaryCurrency('COP', product.price * product.quantity)}
                  {(product.price, product.quantity)}{' '}
                </Label>
              </div>
            </Grid>
            <Grid item xs={12} md={1}>
              <IconButton onClick={() => removeProductAtCart(product._id)}>
                <DeleteIcon className='icon' />
              </IconButton>
            </Grid>
          </Grid>
        ))
      ) : (
        <DataZero
          text='Oppss! No se encontraron productos agregados'
          image={emptyProducts}
        />
      )}
      <CheckoutContainer>
        <Label bold> Proceed to checkout </Label>
        <Label bold> {calculateTotalValue(shoppinCart)} </Label>
      </CheckoutContainer>
    </ListContainer>
  );
};

export default ShoppingCart;
