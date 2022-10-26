import React, { FC, memo, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { decProductCount, incProductCount } from '../../../store/slices/basket';
import { formatMoney } from '../../../utils/formatting';
import Flex from '../../atoms/Flex';
import Label from '../../atoms/Label';
import * as S from './BasketList.styled';

const BasketList: FC = () => {
  const basket = useAppSelector((a) => a.basket);
  const dispatch = useAppDispatch();

  const renderBasketItems = useMemo(() => {
    return basket.items.map((item) => (
      <S.BasketItem key={item.slug}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flexDirection="column">
            <Label size={14} weight={400} color="grayScale">
              Example Product
            </Label>
            <Label size={14} weight={600} color="primary" margin="4px 0 0 0">
              {formatMoney(14.99)}
            </Label>
          </Flex>
          <Flex>
            <S.CountButton onClick={() => dispatch(decProductCount(item))}>
              <svg
                width="10"
                height="3"
                viewBox="0 0 10 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.725586"
                  width="10"
                  height="2.04384"
                  rx="1"
                  fill="#1EA4CE"
                />
              </svg>
            </S.CountButton>
            <S.ItemCount>{item.count}</S.ItemCount>
            <S.CountButton onClick={() => dispatch(incProductCount(item))}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.44053 10.4069L6.44053 6.1977H10.5595C10.8027 6.1977 11 5.9961 11 5.74751C11 5.49892 10.8027 5.29733 10.5595 5.29733H6.44053V1.08812C6.44053 0.839531 6.24326 0.637939 6 0.637939C5.75674 0.637939 5.55947 0.839531 5.55947 1.08812V5.29733L1.44053 5.29733C1.19727 5.29733 1 5.49892 1 5.74751C1 5.9961 1.19727 6.1977 1.44053 6.1977L5.55947 6.1977L5.55947 10.4069C5.55947 10.6555 5.75674 10.8571 6 10.8571C6.24326 10.8571 6.44053 10.6555 6.44053 10.4069"
                  stroke="#1EA4CE"
                />
              </svg>
            </S.CountButton>
          </Flex>
        </Flex>
      </S.BasketItem>
    ));
  }, [basket]);

  if (basket.items.length === 0) {
    return null;
  }
  return (
    <S.BasketListWrapper>
      {renderBasketItems}
      <S.BasketListPrice>
        <Label color="primary" size={14} weight={600}>
          {formatMoney(basket.totalPrice)}
        </Label>
      </S.BasketListPrice>
    </S.BasketListWrapper>
  );
};

export default memo(BasketList);
