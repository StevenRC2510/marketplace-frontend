import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 250px;
  .spacing {
    padding: 20px 15px;
    > p  {
      color: ${(props) => props.theme.colors.orange_1};
    }
  }
`;
