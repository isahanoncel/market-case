import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';
import StyledHelper from '../../../constants/styles/Helper';

export const FilterBoxWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  margin-top: 12px;
  padding: 24px;
  max-height: 244px;
  max-width: 296px;
  overflow: hidden;
  ${device.mobile} {
    max-width: 100%;
  }
`;

export const FilterListWrapper = styled.div`
  max-height: 131px;
  overflow-y: scroll;
`;

export const FilterItem = styled.div`
  cursor: pointer;
  margin-bottom: 18px;
  ${StyledHelper.CenterContentVertical}

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FilterCheck = styled.div<{ checked?: boolean }>`
  ${StyledHelper.CenterContent}
  width: 22px;
  height: 22px;

  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;

  margin: 0 8px 0 0;
  ${(props) =>
    props.checked && `background-color:${props.theme.colors.primary}`};
`;
