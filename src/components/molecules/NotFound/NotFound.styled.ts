import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';
import StyledHelper from '../../../constants/styles/Helper';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: block;
  ${StyledHelper.CenterContent}
  flex-direction: column;

  span {
    height: 50px;
    ${device.mobile} {
      font-size: 24px;
      display: block;
      max-width: 80%;
      text-align: center;
    }
  }
`;

export const Heading = styled.h1`
  height: 75px;
  margin-top: 0;
  font-size: 150px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;

  ${device.mobile} {
    height: 50px;
    font-size: 75px;
  }
`;

export const NotFoundLink = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 25px;
  text-decoration: none;
`;
