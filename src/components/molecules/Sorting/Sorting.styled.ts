import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';
import StyledHelper from '../../../constants/styles/Helper';

export const SortingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  margin-top: 12px;
  padding: 24px;
  max-height: 184px;
  max-width: 296px;
  overflow-y: scroll;
  ${device.mobile} {
    max-width: 100%;
  }
`;

export const SortingItem = styled.div`
  cursor: pointer;
  margin-bottom: 18px;
  ${StyledHelper.CenterContentVertical}

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SortingRadio = styled.div<{ checked: boolean }>`
  ${StyledHelper.CenterContent}
  width: 22px;
  height: 22px;
  border: 2px solid ${({ theme }) => theme.colors.innerBorder};
  border-radius: 22px;
  margin: 0 12px 0 0;
  ${(props) => props.checked && `border-color:${props.theme.colors.primary}`};
`;
