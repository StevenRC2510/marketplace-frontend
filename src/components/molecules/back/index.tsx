import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Label from '../../atoms/label';

import { BackStyled } from './styles';

interface BackProps {
  children: ReactNode;
}

const BackHeader = ({ children }: BackProps) => {
  const history = useHistory();

  const onBack = (): void => {
    history.goBack();
  };
  return (
    <BackStyled onClick={() => onBack()}>
      <ArrowBackIosIcon />
      <Label bold>{children}</Label>
    </BackStyled>
  );
};

export default BackHeader;
