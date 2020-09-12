import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import { MessageAnimation } from 'src/assets/styles/animations';

export const ProductDetailContainer = styled(Grid)`
  padding: 40px;
`;

export const Message = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 22px 3px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 6px 8px 8px 8px;
  ${MessageAnimation()}
  &::before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    top: 0px;
    left: -16px;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 20px solid ${(props) => props.theme.colors.black};
  }
  &:hover  {
  }
`;
