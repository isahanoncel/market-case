import styled from 'styled-components';
import StyledHelper from '../../../constants/styles/Helper';

export const PaginationWrapper = styled.div`
  ${StyledHelper.CenterContent}
  margin-top: 32px;
  padding-bottom: 100px;
`;

export const PrevNext = styled.div<{ disabled?: boolean }>`
  cursor: pointer;
  ${StyledHelper.CenterContent}
  color:${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  gap: 6px;
  ${(props) => props.disabled && 'opacity:0;'}
  &:first-of-type {
    margin-right: 56px;
  }
  &:last-of-type {
    margin-left: 56px;
    svg {
      transform: rotateY(180deg);
    }
  }
`;

export const PaginationItem = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  width: 32px;
  height: 40px;
  border-radius: 2px;
  ${StyledHelper.CenterContent}
  ${(props) =>
    props.isActive &&
    `color:${props.theme.colors.white};background-color:${props.theme.colors.primary};`}
`;
