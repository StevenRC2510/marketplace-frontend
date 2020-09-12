import styled from 'styled-components';

interface LabelStylesProps {
  color?: string;
  bold?: boolean;
  size?: string;
}

export const Typography = styled.p<LabelStylesProps>`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-size: ${(props) => props.size && props.size};
  margin: 0;
  text-align: left;
  &::first-letter {
    text-transform: capitalize;
  }
`;
