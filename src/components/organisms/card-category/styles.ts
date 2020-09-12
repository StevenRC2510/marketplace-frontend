import styled from 'styled-components';
import { BounceAnimation } from 'src/assets/styles/animations';
import { flex } from 'src/assets/styles';

export const DefaultContainer = styled.div`
  padding: 20px 10px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.orange_1};
    > p {
      font-weight: bold;
      color: ${(props) => props.theme.colors.orange_1};
    }
    text-decoration: underline;
  }
  .view-more-action {
    ${flex('center', 'center')}
    &:hover {
      color: ${(props) => props.theme.colors.orange_1};
      > p {
        font-weight: bold;
        color: ${(props) => props.theme.colors.orange_1};
      }
      text-decoration: underline;
    }
  }
`;

export const CategoryContainer = styled.div`
  &:hover {
    ${BounceAnimation()};
  }
`;
