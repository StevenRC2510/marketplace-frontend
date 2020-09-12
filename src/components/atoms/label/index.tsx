import React, { ReactNode } from 'react';
import { Typography } from './styles';

interface LabelProps {
  color?: string;
  bold?: boolean;
  size?: string;
  children: ReactNode;
}

const Label = ({ color, bold, children, size }: LabelProps) => (
  <Typography bold={bold} color={color} size={size}>
    {children}
  </Typography>
);

export default Label;
