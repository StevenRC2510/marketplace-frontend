import React, { Fragment, memo } from 'react';

import { Category } from 'src/shared/entities/categories';
import { emptyData } from 'src/assets/images';
import FactoryCategory from 'src/components/organisms/categories-list/factory';
import DataZero from '../data-zero';

import { ListContainer } from './styles';

interface CategoriesListProps {
  data: Category[];
}

const CategoriesListComponent = ({ data }: CategoriesListProps) => {
  return (
    <ListContainer>
      {data.length > 0 ? (
        <ul className='grid-layout'>
          <Fragment>
            {data.map((product, i) => (
              <Fragment key={`product-${i}`}>
                {FactoryCategory.build(product)}
              </Fragment>
            ))}
          </Fragment>
        </ul>
      ) : (
        <DataZero text='Oppss! No se encontraron productos' image={emptyData} />
      )}
    </ListContainer>
  );
};

const CategoriesList = memo(CategoriesListComponent);
export default CategoriesList;
