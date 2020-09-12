import React from 'react';

import { Category } from 'src/shared/entities/categories';
import CardCategory from 'src/components/organisms/card-category';

export default class FactoryCategory {
  static build(data: Category) {
    switch (data.type) {
      case 'best seller':
        return <CardCategory {...data} />;
      case 'normal':
        return <CardCategory {...data} />;
      default:
        return undefined;
    }
  }
}
