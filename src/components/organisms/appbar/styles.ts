import styled from 'styled-components';

import { Badge } from '@material-ui/core';
import { flex } from 'src/assets/styles';

export const BadgeStyled = styled(Badge)`
  .MuiBadge-badge {
    background-color: ${(props) => props.theme.colors.orange_1};
  }
`;

export const LogoWrapper = styled.div`
  > a {
    ${flex('center')}
  }
`;
