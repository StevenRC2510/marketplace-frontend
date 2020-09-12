import styled from 'styled-components';

import { flex } from 'src/assets/styles';

interface ImagesProps {
  selected: boolean;
}

export const PreviewContainer = styled.div`
  ${flex()};
  cursor: pointer;
  .image-list {
    ${flex('center', 'flex-start', 'column')};
    margin: 0 40px;
    > div {
      padding: 10px 0;
      &:first-child {
        padding-top: 0;
      }
    }
  }
`;

export const Wrapper = styled.div<ImagesProps>`
  > img {
    border-radius: 12px;
    border: ${(props) =>
      props.selected && `1px solid ${props.theme.colors.orange_1}`};
    box-shadow: ${(props) =>
      props.selected && `0px 0px 18px 2px rgba(243,156,18,1)`};
  }
`;
