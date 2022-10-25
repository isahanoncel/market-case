import styled from 'styled-components';
import { Colors } from '../../../interfaces/styled-components';

export interface ITitle {
  weight: number;
  size: number;
  lineHeight: number;
  color: Colors;
  margin: string;
}

export const StyledLabel = styled.span<ITitle>`
  font-size: ${({ size }) => size}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ weight }) => weight};
  margin: ${({ margin }) => margin};
`;
