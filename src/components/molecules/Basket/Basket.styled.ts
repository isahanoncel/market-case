import styled from 'styled-components';
import StyledHelper from '../../../constants/styles/Helper';

export const BasketWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 30px 24px;
  text-align: center;
  ${StyledHelper.CenterContent}

  svg {
    margin-right: 13.41px;
  }
`;
