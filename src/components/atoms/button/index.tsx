import React, { ReactNode } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  disabled: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => (
  <ButtonStyled disabled={disabled} onClick={onClick}>
    {children}
  </ButtonStyled>
);

export default Button;
