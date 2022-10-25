import React, { FC } from 'react';
import * as S from './Container.styled';

interface IContainer {
  children: React.ReactNode | string;
}
const Container: FC<IContainer> = ({
  children,
}) => {
  return (
    <S.ContainerWrapper>
      {children}
    </S.ContainerWrapper>
  );
};

export default Container;
