import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';
import StyledHelper from '../../../constants/styles/Helper';

export const BasketListWrapper = styled.div`
  width: 100%;
  border: 8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  padding: 16px;
  position: sticky;
  top: 0;
  max-height: 50%;
  overflow-y: scroll;

  ${device.mobile} {
    position: fixed;
    top: 85px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const BasketItem = styled.div`
  padding-bottom: 18px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black50};
`;

export const CountButton = styled.div`
  cursor: pointer;
  ${StyledHelper.CenterContent}
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const ItemCount = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 32px;
  height: 32px;
  margin: 0 11px;
  ${StyledHelper.CenterContent}
`;
export const BasketListPrice = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  width: 92px;
  height: 51.1px;
  margin-left: auto;
  ${StyledHelper.CenterContent}
`;
