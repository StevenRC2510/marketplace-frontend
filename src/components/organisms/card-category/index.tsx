import React from 'react';

import Label from 'src/components/atoms/label';
import Card from '../card';
import Image from 'src/components/atoms/image';
import Link from 'src/components/atoms/link';
import { emptyImage } from 'src/assets/images';

import { DefaultContainer, CategoryContainer } from './styles';

interface CategoriesProps {
  category_name: string;
  image: string;
  type: string;
  _id: string;
  onClick?: () => void;
}

const CardCategory = ({ category_name, image, _id }: CategoriesProps) => {
  return (
    <CategoryContainer>
      <Link path={`/category/${_id}`}>
        <Card>
          <DefaultContainer>
            <Label bold>{category_name}</Label>
          </DefaultContainer>
          <Image
            src={image || emptyImage}
            alt={`category-${category_name}`}
            height={200}
          />
          <DefaultContainer>
            <div className='view-more-action'>
              <Label>View More</Label>
            </div>
          </DefaultContainer>
        </Card>
      </Link>
    </CategoryContainer>
  );
};

export default CardCategory;
