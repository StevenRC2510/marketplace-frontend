import React from 'react';

import DataZeroInfo from 'src/components/molecules/data-zero-info';

interface DataZeroProps {
  image: string;
  text: string;
}
const DataZero = (props: DataZeroProps) => {
  return <DataZeroInfo {...props} />;
};

export default DataZero;
