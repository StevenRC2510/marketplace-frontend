import { Button } from '@material-ui/core';

import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  text-transform: capitalize;
  &:disabled {
    background-color: ${(props) => props.theme.colors.gray_1};
    color: ${(props) => props.theme.colors.black};
  }
  &:hover  {
    background-color: ${(props) => props.disabled && props.theme.colors.gray_1};
    opacity: 0.2;
  }
  .MuiButton-label {
    > svg {
      margin-left: 10px;
    }
  }
`;
