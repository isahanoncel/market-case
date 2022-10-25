import React, { FC, memo } from 'react';
import Container from '../../atoms/Container';
import Flex from '../../atoms/Flex';
import Basket from '../../molecules/Basket';
import * as S from './Header.styled';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <S.HeaderLink href="/">
            <img src="/assets/logo.svg" alt="Getir" width={141} height={40} />
          </S.HeaderLink>
          <Basket />
        </Flex>
      </Container>
    </S.HeaderWrapper>
  );
};

export default memo(Header, () => true);
