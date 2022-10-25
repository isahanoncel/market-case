/* eslint-disable react/no-unescaped-entities */
import React, { FC, memo } from 'react';
import Label from '../../atoms/Label';
import * as S from './NotFound.styled';

const NotFound: FC = () => {
  return (
    <S.NotFoundWrapper>
      <S.Heading>OOPS!</S.Heading>

      <Label size={25} color="primary" weight={500}>
        We can't find the page you're looking for.
      </Label>

      <S.NotFoundLink href="/">Visit homepage</S.NotFoundLink>
    </S.NotFoundWrapper>
  );
};

export default memo(NotFound, () => true);
