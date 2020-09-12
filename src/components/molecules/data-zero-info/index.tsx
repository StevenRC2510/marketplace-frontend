import React from 'react';

import { Grid } from '@material-ui/core';
import Image from 'src/components/atoms/image';
import Label from 'src/components/atoms/label';

import { GridStyled } from './styles';

interface DataZeroInfoProps {
  image: string;
  text: string;
}

const DataZeroInfo = ({ image, text }: DataZeroInfoProps) => {
  return (
    <Grid container>
      <GridStyled item xs={12} md={12}>
        <Image src={image} alt={`image-data-zero`} height={300} />
        <Label bold size='22px'>
          {' '}
          {text}{' '}
        </Label>
      </GridStyled>
    </Grid>
  );
};

export default DataZeroInfo;
