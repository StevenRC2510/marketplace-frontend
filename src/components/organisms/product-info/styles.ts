import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import { flex } from 'src/assets/styles';

export const ProductInfoContainer = styled(Grid)`
  ${flex('flex-start', 'center', 'column')}
  padding: 0 40px;
  > hr {
    width: 100%;
    margin: 10px 0px;
  }
  .stars-container {
    ${flex()}
    .star {
      color: #f4d03f;
    }
  }
  .spacing {
    padding: 10px 0px;
  }
`;

export const DefaultContainer = styled.div`
  padding: 10px 0px;
`;
