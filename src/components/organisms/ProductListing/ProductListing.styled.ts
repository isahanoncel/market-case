import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';

export const ProductListingWrapper = styled.div`
  width: 100%;
  min-width: 608px;

  ${device.mobile} {
    padding-top: 20px;
    min-width: 100%;
  }
`;
