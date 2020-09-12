import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const ListContainer = styled(Grid)`
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
    padding: 40px 30px;
  }
`;
