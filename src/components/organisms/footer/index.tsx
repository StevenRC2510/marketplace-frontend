import React from 'react';

import Label from 'src/components/atoms/label';

import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer container justify='center' alignItems='center'>
      <Label bold size='14px'>
        {' '}
        copyright© marketplalce S.A.S{' '}
      </Label>
    </FooterContainer>
  );
};

export default Footer;
