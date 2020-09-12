import React, { ReactNode } from 'react';

import { Card as CardMui } from '@material-ui/core/';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <CardMui>{children}</CardMui>;
};

export default Card;
