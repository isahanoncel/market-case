import React, { FC, useMemo } from 'react';
import { IProduct } from '../../../interfaces/product';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import * as S from './ProductListingTable.styled';

interface IProductListingTable {
  items: IProduct[];
}

const ProductListingTable: FC<IProductListingTable> = ({ items }) => {
  const renderItems = useMemo(() => {
    return items.map((item) => {
      return (
        <S.ProductListingTableItem key={item.slug}>
          <S.ItemImageWrapper>
            <img
              src="https://i.picsum.photos/id/527/92/92.jpg?hmac=3exqIu160Nj6P4D-V4inAd0GOMHbsFdVaqDVJSweLoY"
              alt="market"
            />
          </S.ItemImageWrapper>
          <S.ItemPrice>₺ {item.price}</S.ItemPrice>
          <Label size={14} weight={600}>
            {item.name}
          </Label>
          <Button fullWidth margin="8px 0 0 0">
            Add
          </Button>
        </S.ProductListingTableItem>
      );
    });
  }, [items]);

  return (
    <S.ProductListingTableWrapper>{renderItems}</S.ProductListingTableWrapper>
  );
};

export default ProductListingTable;
