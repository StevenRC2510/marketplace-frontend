import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Divider, Grid } from '@material-ui/core';
import { dictionaryCurrency } from 'src/helpers/currency';
import { getShoppingCart } from 'src/shared/store/shopping-cart/selectors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Label from 'src/components/atoms/label';
import Button from 'src/components/atoms/button';
import Tag from 'src/components/molecules/tag';
import StarIcon from '@material-ui/icons/Star';
import Operations from 'src/components/molecules/operations';

import { ProductInfoContainer } from './styles';

interface ProductInfoProps {
  _id: string;
  product_name: string;
  category: string;
  image: string[];
  price: number;
  best_seller: boolean;
  qualification: number;
  description: string;
  stock: number;
  color?: string;
  currentValue: number;
  onClick: () => void;
  QuantityProduct: (quantity: number) => void;
}

const ProductInfo = ({
  product_name,
  description,
  qualification,
  price,
  category,
  best_seller,
  _id,
  stock,
  color,
  onClick,
  QuantityProduct,
  currentValue,
}: ProductInfoProps) => {
  const { shoppinCart } = useSelector(getShoppingCart);

  const createStarts = (length: number) => Array.from({ length }, (v, i) => i);

  const disabledButton = (): boolean => {
    return shoppinCart.some((storeProduct) => storeProduct._id === _id);
  };

  return (
    <ProductInfoContainer container>
      <div className='spacing'>
        <Label bold>{product_name}</Label>
      </div>
      {best_seller && <Tag />}
      <Divider />
      <div className='spacing'>
        <Label bold> Description </Label>
        <Label>{description}</Label>
      </div>
      <Grid container alignItems='center'>
        <Grid item xs={12} md={4}>
          <Label bold> Qualification </Label>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className='stars-container'>
            {createStarts(qualification).map((star, index) => (
              <Fragment key={index}>
                <StarIcon className='star' />
              </Fragment>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={2} className='spacing'>
          <Label bold> Price </Label>
        </Grid>
        <Grid item xs={12} md={10}>
          <Label>{dictionaryCurrency('COP', price)}</Label>
        </Grid>
      </Grid>
      <div className='spacing'>
        <Label color='red'>
          {' '}
          {`Only ${stock} units left (more units on the way)`}
        </Label>
      </div>
      <Grid container>
        <Grid item xs={12} md={2} className='spacing'>
          <Label bold> Category </Label>
        </Grid>

        <Grid item xs={12} md={10} className='spacing'>
          <Label> {category} </Label>
        </Grid>
        {color && (
          <Fragment>
            <Grid item xs={12} md={2} className='spacing'>
              <Label bold> Color </Label>
            </Grid>
            <Grid item xs={12} md={10} className='spacing'>
              <Label> {color} </Label>
            </Grid>
          </Fragment>
        )}
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12} md={4}>
          <div className='spacing'>
            <Button onClick={onClick} disabled={disabledButton()}>
              Add Product <ShoppingCartIcon />
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='spacing'>
            <Operations
              currentValue={currentValue || 1}
              valueChanged={QuantityProduct}
            />
          </div>
        </Grid>
      </Grid>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
