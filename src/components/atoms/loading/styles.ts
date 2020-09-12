import { CircularProgress } from '@material-ui/core';

import styled from 'styled-components';

export const LoadingStyled = styled(CircularProgress)`
  position: fixed;
  right: 50%;
  bottom: 50%;
  left: 50%;
  top: 50%;
  .MuiCircularProgress-svg {
    color: ${(props) => props.theme.colors.orange_1};
  }
`;
