import React, { useEffect } from 'react';
import Container from '../../components/atoms/Container';
import { useAppDispatch, useAppSelector } from '../../store';
import { setProducts } from '../../store/slices/products';

const Home = () => {
  const products = useAppSelector((a) => a.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts([1, 2, 3]));
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return <Container>Getir</Container>;
};

export default Home;
