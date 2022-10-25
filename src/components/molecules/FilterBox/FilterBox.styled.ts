import styled from 'styled-components';
import StyledHelper from '../../../constants/styles/Helper';

export const FilterBoxWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  margin-top: 12px;
  padding: 24px;
  max-height: 184px;
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
