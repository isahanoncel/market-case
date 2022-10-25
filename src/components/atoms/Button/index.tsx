import React, { FC } from 'react';
import { COLORS } from '../../../constants/theme';
import { Colors } from '../../../interfaces/styled-components';
import * as S from './Button.styled';

interface IButton {
  onClick?: () => void;
  children: string;
  backgroundColor?: Colors;
  disabled?: boolean;
}
const Button: FC<IButton> = ({
  children,
  onClick,
  backgroundColor,
  disabled,
}) => {
  return (
    <S.StyledButton
      disabled={disabled}
      backgroundColor={COLORS[backgroundColor ?? 'primary']}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
