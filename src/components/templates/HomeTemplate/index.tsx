import React, { useEffect, useState } from 'react';
import { ICompany } from '../../../interfaces/company';
import CompanyService from '../../../service/company';
import ProductService from '../../../service/product';
import { useAppDispatch } from '../../../store';
import { setProducts } from '../../../store/slices/products';
import Container from '../../atoms/Container';
import Filters from '../../organisms/Filters';
import Header from '../../organisms/Header';
import ProductListing from '../../organisms/ProductListing';
import * as S from './HomeTemplate.styled';

const HomeTemplate = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    CompanyService.getCompanies().then((data) => {
      setCompanies(data);
    });

    ProductService.getTags().then((data) => {
      setTags(data);
    });

    ProductService.getProducts().then((data) => {
      dispatch(setProducts(data));
    });
  }, []);

  return (
    <S.HomeTemplateWrapper>
      <Header />
      <Container>
        <S.HomeTemplateContentWrapper>
          <S.HomeTemplateContentBox>
            <Filters tags={tags} companies={companies} />
          </S.HomeTemplateContentBox>
          <S.HomeTemplateContentBox>
            <ProductListing />
          </S.HomeTemplateContentBox>
          <S.HomeTemplateContentBox>Basket</S.HomeTemplateContentBox>
        </S.HomeTemplateContentWrapper>
      </Container>
    </S.HomeTemplateWrapper>
  );
};

export default HomeTemplate;
