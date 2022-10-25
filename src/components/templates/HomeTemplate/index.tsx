import React from 'react';
import Container from '../../atoms/Container';
import Filters from '../../organisms/Filters';
import Header from '../../organisms/Header';
import * as S from './HomeTemplate.styled';

const HomeTemplate = () => {
  return (
    <S.HomeTemplateWrapper>
      <Header />
      <Container>
        <S.HomeTemplateContentWrapper>
          <S.HomeTemplateContentBox>
            <Filters />
          </S.HomeTemplateContentBox>
          <S.HomeTemplateContentBox>Products</S.HomeTemplateContentBox>
          <S.HomeTemplateContentBox>Basket</S.HomeTemplateContentBox>
        </S.HomeTemplateContentWrapper>
      </Container>
    </S.HomeTemplateWrapper>
  );
};

export default HomeTemplate;
