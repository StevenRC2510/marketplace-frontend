import styled from 'styled-components';

export const ImageStyled = styled.img`
  max-width: 100%;
  object-fit: contain;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
`;
