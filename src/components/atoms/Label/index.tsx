import React, { FC } from 'react';
import * as S from './Label.styled';
import { Colors } from '../../../interfaces/styled-components';

interface ITitle {
  weight?: number;
  size?: number;
  color?: Colors;
  children?: React.ReactNode | string;
  margin?: string;
}

const Label: FC<ITitle> = ({
  weight = 400,
  size = 14,
  color = 'black600',
  margin = '0',
  children,
}) => (
  <S.StyledLabel color={color} weight={weight} size={size} margin={margin}>
    {children}
  </S.StyledLabel>
);

export default Label;
