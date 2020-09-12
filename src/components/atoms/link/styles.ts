import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;
