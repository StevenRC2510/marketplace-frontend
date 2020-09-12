import styled from 'styled-components';

export const TagStyled = styled.div`
  position: relative;
  color: orange;
  background-color: orange;
  padding: 5px;
  border-radius: 4px 0 0 4px;
  max-width: 100px;
  &::before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    right: 0;
    top: 0;
    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
    border-right: 10px solid ${(props) => props.theme.colors.white};
  }
  > p {
    margin-right: 10px;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.size_14};
  }
`;
