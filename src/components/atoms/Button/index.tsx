import React, { FC, useCallback } from 'react';
import { COLORS } from '../../../constants/theme';
import * as S from './Button.styled';

interface IButton {
  onClick?: () => void;
  children: string;
  disabled?: boolean;
  margin?: string;
  secondary?: boolean;
  fullWidth?: boolean;
}
const Button: FC<IButton> = ({
  children,
  onClick,
  disabled,
  margin,
  secondary,
  fullWidth,
}) => {
  const buttonTheme = useCallback(() => {
    if (secondary) {
      return {
        color: COLORS.primary,
        backgroundColor: COLORS.whiteBlue,
      };
    }
    return {
      color: COLORS.white,
      backgroundColor: COLORS.primary,
    };
  }, [secondary]);

  return (
    <S.StyledButton
      disabled={disabled}
      fullWidth={fullWidth}
      backgroundColor={buttonTheme().backgroundColor}
      color={buttonTheme().color}
      onClick={onClick}
      margin={margin}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
