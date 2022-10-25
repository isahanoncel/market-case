import React, { FC, memo } from 'react';
import { useAppSelector } from '../../../store';
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';
import * as S from './Basket.styled';

const Basket: FC = () => {
  const basket = useAppSelector((a) => a.basket);

  return (
    <S.BasketWrapper>
      <Icon name="Bag" />
      <Label color="white" size={14} weight={600}>
        ₺ {basket.price}
      </Label>
    </S.BasketWrapper>
  );
};

export default memo(Basket);
