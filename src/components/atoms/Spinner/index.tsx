import React, { FC } from 'react';
import * as S from './Spinner.styled';

interface ISpinner {
  color?: string;
  size?: number;
  strokeWidth?: number;
  margin?: string;
}

const Spinner: FC<ISpinner> = ({
  color = 'Gray',
  size = 40,
  strokeWidth = 5,
  margin,
}) => (
  <S.Svg margin={margin} viewBox="0 0 50 50" width={size}>
    <S.Circle
      cx="25"
      cy={25}
      r={20}
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    />
  </S.Svg>
);

export default Spinner;
