import React, { FC } from 'react';
import * as S from './Flex.styled';

interface IFlex extends S.IFlexContainer {
  children: React.ReactNode | string;
  onClick?:() => void;
  externalCss?:React.CSSProperties
}
const Flex: FC<IFlex> = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  margin,
  flex,
  onClick,
  externalCss
}) => {
  return (
    <S.FlexContainer
      style={externalCss}
      onClick={onClick}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      flex={flex}
      margin={margin}
    >
      {children}
    </S.FlexContainer>
  );
};

export default Flex;
