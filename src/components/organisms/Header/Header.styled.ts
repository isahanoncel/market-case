import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  ${device.mobile} {
    position: fixed;
    top: 0;
  }
`;

export const HeaderLink = styled.a`
  margin: auto;
`;
