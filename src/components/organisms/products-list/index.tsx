import React from 'react';

import Product from 'src/components/organisms/product';

import { ListContainer } from './styles';
import { Product as IProduct } from 'src/shared/entities/products';
import { emptyData } from 'src/assets/images';
import DataZero from '../data-zero';

interface ProductListProps {
  data: IProduct[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <ListContainer>
      {data.length > 0 ? (
        <div className='grid-layout'>
          {data.map((product, index) => (
            <Product
              key={`product-${product.product_name}-${index}`}
              {...product}
            />
          ))}
        </div>
      ) : (
        <DataZero text='Oppss! No se encontraron productos' image={emptyData} />
      )}
    </ListContainer>
  );
};

export default ProductList;
