/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { IProduct } from '../../../interfaces/product';
import { useAppSelector } from '../../../store';
import Button from '../../atoms/Button';
import Flex from '../../atoms/Flex';
import Label from '../../atoms/Label';
import ProductListingTable from '../../molecules/ProductListingTable';
import * as S from './ProductListing.styled';
import Pagination from '../../molecules/Pagination';

const ProductListing: FC = () => {
  const [activeType, setActiveType] = useState<string>('mug');
  const products = useAppSelector((a) => a.products);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const filters = useAppSelector((a) => a.filter);
  const [page, setPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 16;

  useEffect(() => {
    let productData = cloneDeep(products?.items) ?? [];
    if (activeType) {
      productData = productData.filter(
        (product) => product.itemType === activeType,
      );
    }

    if (filters.sort) {
      if (filters.sort === 'price_asc') {
        productData = productData.sort((a, b) => a.price - b.price);
      } else if (filters.sort === 'price_desc') {
        productData = productData.sort((a, b) => b.price - a.price);
      } else if (filters.sort === 'added_asc') {
        productData = productData.sort((a, b) => a.added - b.added);
      } else if (filters.sort === 'added_desc') {
        productData = productData.sort((a, b) => b.added - a.added);
      }
    }

    if (filters.brands.length > 0) {
      productData = productData.filter((product) =>
        filters.brands.includes(product.manufacturer),
      );
    }

    if (filters.tags.length > 0) {
      productData = productData.filter((product) => {
        return product.tags.some((tag) => filters.tags.includes(tag));
      });
    }

    setFilteredProducts([...productData]);
  }, [products.items, activeType, filters, page]);

  useEffect(() => {
    setPage(1);
  }, [filters, activeType]);

  const handleChangeActiveType = useCallback(
    (type: string) => {
      setActiveType(type);
    },
    [activeType],
  );

  return (
    <S.ProductListingWrapper>
      <Label size={20} weight={400} color="black500">
        Products
      </Label>

      <Flex margin="16px 0 0 0">
        <Button
          onClick={() => handleChangeActiveType('mug')}
          secondary={activeType !== 'mug'}
          margin="0 8px 0 0"
        >
          mug
        </Button>
        <Button
          onClick={() => handleChangeActiveType('shirt')}
          secondary={activeType !== 'shirt'}
        >
          shirt
        </Button>
      </Flex>
      {filteredProducts.length > 0 ? (
        <>
          <ProductListingTable
            items={filteredProducts.slice(
              (page - 1) * ITEMS_PER_PAGE,
              (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
            )}
          />
          <Pagination
            page={page}
            itemLength={filteredProducts.length}
            itemsPerPage={ITEMS_PER_PAGE}
            setPage={setPage}
          />
        </>
      ) : (
        <Flex margin="8px 0 0 0">
          <Label color="primary" size={20} weight={600}>
            No products were found matching your search....
          </Label>
        </Flex>
      )}
    </S.ProductListingWrapper>
  );
};

export default memo(ProductListing);
