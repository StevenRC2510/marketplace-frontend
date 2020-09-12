import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const FooterContainer = styled(Grid)`
  height: 70px;
  background-color: black;
  > p {
    color: ${(props) => props.theme.colors.white};
  }
`;
