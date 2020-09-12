import React from 'react';

import Label from 'src/components/atoms/label';
import Tag from 'src/components/molecules/tag';
import StarIcon from '@material-ui/icons/Star';
import Image from 'src/components/atoms/image';
import Link from 'src/components/atoms/link';

import { dictionaryCurrency } from 'src/helpers/currency';
import { stringLimit } from 'src/helpers/global';
import { ProductContainer } from './styles';

interface ProductProps {
  product_name: string;
  category: string;
  image: string[];
  price: number;
  best_seller: boolean;
  description: string;
  qualification: number;
  _id: string;
  onClick?: () => void;
}

const Product = ({
  product_name,
  image,
  description,
  qualification,
  price,
  _id,
}: ProductProps) => {
  const [, , , , currentCategory] = window.location.href.split('/');

  return (
    <ProductContainer>
      <Link path={`/category/${currentCategory}/products/${_id}`}>
        <Label bold>{product_name}</Label>
        <div className='default-padding '>
          <Tag />
        </div>
        <Image src={image[0]} alt={`product-${product_name}`} height={200} />
        <div className='default-padding '>
          <Label>{stringLimit(description)}</Label>
        </div>
        {new Array(qualification).map((item, index) => (
          <StarIcon key={`start-${index}`} />
        ))}
        <div className='default-padding '>
          <Label bold>{dictionaryCurrency('COP', price)}</Label>
        </div>
      </Link>
    </ProductContainer>
  );
};

export default Product;
