import styled from 'styled-components';

import { flex } from 'src/assets/styles';

export const ListContainer = styled.div`
  position: relative;
  width: 350px;
  padding: 20px;
  > hr {
    margin: 20px 0;
  }
  .products-container {
    padding: 20px 0;
    ${flex('center', 'center')};
    .price {
      > p {
        white-space: nowrap;
        text-align: center;
      }
    }
    .icon {
      color: ${(props) => props.theme.colors.red_1};
    }
  }
`;

export const CheckoutContainer = styled.div`
  ${flex('center', 'space-between')};
  width: 370px !important;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.orange_1};
  padding: 30px 10px;
  width: 100%;
  margin-left: -20px;
  cursor: pointer;
  > p {
    color: ${(props) => props.theme.colors.white};
  }
`;
