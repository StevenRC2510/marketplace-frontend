import styled from 'styled-components';

import { flex } from 'src/assets/styles';

export const OperationsStyled = styled.div`
  ${flex('center')};
  position: relative;
  .substract {
    ${flex('center', 'center')};
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.orange_1};
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
    &:hover  {
      background-color: ${(props) => props.theme.colors.gray_1};
    }
    &:active {
      transform: scale(1.4);
    }
  }
  .add {
    position: relative;

    ${flex('center', 'center')};
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.orange_1};
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    border-radius: 8px;
    margin-left: 10px;
    cursor: pointer;
    &:hover  {
      background-color: ${(props) => props.theme.colors.gray_1};
    }
    &:active {
      transform: scale(1.4);
    }
  }
`;
