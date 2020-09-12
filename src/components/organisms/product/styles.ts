import styled from 'styled-components';

export const ProductContainer = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.gray_3};
  border-radius: 12px;
  padding: 20px;
  .default-padding {
    padding: 10px 0;
  }
`;
