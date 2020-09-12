import React from 'react';
import { ImageStyled } from './styles';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Image = (props: ImageProps) => <ImageStyled {...props} />;

export default Image;
