import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ICompany } from '../../../interfaces/company';
import CompanyService from '../../../service/company';
import ProductService from '../../../service/product';
import { useAppDispatch } from '../../../store';
import { setProducts } from '../../../store/slices/products';
import Container from '../../atoms/Container';
import BasketList from '../../molecules/BasketList';
import Footer from '../../molecules/Footer';
import Filters from '../../organisms/Filters';
import Header from '../../organisms/Header';
import ProductListing from '../../organisms/ProductListing';
import * as S from './HomeTemplate.styled';

const HomeTemplate = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [showBasketList, setShowBasketList] = useState<boolean>(false);
  const [productRequestLoading, setProductRequestLoading] = useState(true);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    setShowBasketList(window.innerWidth > 765);
  }, []);

  useEffect(() => {
    CompanyService.getCompanies().then((data) => {
      setCompanies(data);
    });

    ProductService.getTags().then((data) => {
      setTags(data);
    });

    ProductService.getProducts()
      .then((data) => {
        dispatch(setProducts(data));
      })
      .finally(() => {
        setProductRequestLoading(false);
      });
  }, []);

  return (
    <S.HomeTemplateWrapper>
      <Header setShowBasketList={setShowBasketList} />
      <Container>
        <S.HomeTemplateContentWrapper>
          <S.HomeTemplateContentBox>
            <Filters tags={tags} companies={companies} />
          </S.HomeTemplateContentBox>
          <S.HomeTemplateContentBox>
            <ProductListing isLoading={productRequestLoading} />
          </S.HomeTemplateContentBox>
          <S.HomeTemplateContentBox>
            {showBasketList && <BasketList />}
          </S.HomeTemplateContentBox>
        </S.HomeTemplateContentWrapper>
        <Footer />
      </Container>
    </S.HomeTemplateWrapper>
  );
};

export default HomeTemplate;
