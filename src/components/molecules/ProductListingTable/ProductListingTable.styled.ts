import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';

export const ProductListingTableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 20px;
  margin-top: 16px;
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 608px;
  gap: 20px 24px;
  ${device.mobile} {
    width: 100%;
    display: block;
  }
`;

export const ProductListingTableItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 124px;
  height: 225px;

  ${device.mobile} {
    text-align: center;
    width: 100%;
  }
`;

export const ItemPrice = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 14px;
  margin-top: 8px;
  line-height: 20px;
`;

export const ItemImageWrapper = styled.div`
  padding: 16px;
  border: 1.17666px solid #f3f0fe;
  border-radius: 12px;
`;
