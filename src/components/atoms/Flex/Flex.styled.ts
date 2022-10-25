import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';

export interface IFlexContainer {
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  flexDirection?: 'column' | 'row';
  flex?: number;
  margin?: string;
}

export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  height: 100%;
  ${device.mobile} {
    height: auto;
  }
  ${(props) =>
    props.justifyContent && `justify-content:${props.justifyContent}`};
  ${(props) => props.alignItems && `align-items:${props.alignItems}`};
  ${(props) => props.flexDirection && `flex-direction:${props.flexDirection}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
`;
