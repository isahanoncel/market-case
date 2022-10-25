import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';

export const HomeTemplateWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  ${device.mobile} {
    margin-top: 80px;
  }
`;
export const HomeTemplateContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;

  ${device.mobile} {
    display: block;
    padding: 10px 16px;
  }
`;
export const HomeTemplateContentBox = styled.div`
  flex: 1;
`;

export const HeaderLink = styled.a`
  margin: auto;
`;
