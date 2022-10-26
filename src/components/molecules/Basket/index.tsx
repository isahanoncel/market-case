import React, { FC, memo, useCallback } from 'react';
import { useAppSelector } from '../../../store';
import { formatMoney } from '../../../utils/formatting';
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';
import * as S from './Basket.styled';

interface IBasket {
  setShowBasketList: (show: any) => void;
}
const Basket: FC<IBasket> = ({ setShowBasketList }) => {
  const basket = useAppSelector((a) => a.basket);

  const handleShowBasketList = useCallback(() => {
    if (window.innerWidth < 1024) {
      setShowBasketList((prev: boolean) => !prev);
    }
  }, []);
  return (
    <S.BasketWrapper onClick={handleShowBasketList}>
      <Icon name="Bag" />
      <Label color="white" size={14} weight={600}>
        {formatMoney(basket.totalPrice)}
      </Label>
    </S.BasketWrapper>
  );
};

export default memo(Basket);
