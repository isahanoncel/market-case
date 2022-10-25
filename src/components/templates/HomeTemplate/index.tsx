import React from 'react';
import Container from '../../atoms/Container';
import Header from '../../organisms/Header';
import * as S from './HomeTemplate.styled';

const HomeTemplate = () => {
  return (
    <S.HomeTemplateWrapper>
      <Header />
      <Container>market app</Container>
    </S.HomeTemplateWrapper>
  );
};

export default HomeTemplate;
