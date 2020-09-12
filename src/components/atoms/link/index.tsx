import React, { ReactNode } from 'react';

import { LinkStyled } from './styles';

interface LinkProps {
  path: string;
  children: ReactNode;
}

const Link = ({ path, children }: LinkProps) => {
  return <LinkStyled to={path}>{children}</LinkStyled>;
};

export default Link;
