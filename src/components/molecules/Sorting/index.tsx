import React, { FC, useCallback, useMemo } from 'react';
import Flex from '../../atoms/Flex';
import Label from '../../atoms/Label';
import * as S from './Sorting.styled';
import options from './Sorting.options';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setSort } from '../../../store/slices/filter';

const Sorting: FC = () => {
  const sorting = useAppSelector((a) => a.filter.sort);
  const dispatch = useAppDispatch();

  const handleChangeSorting = useCallback((item: string) => {
    dispatch(setSort(item));
  }, []);

  const renderOptions = useMemo(() => {
    return options.map((item) => (
      <S.SortingItem
        key={item.type}
        onClick={() => handleChangeSorting(item.type)}
      >
        <S.SortingRadio checked={sorting === item.type}>
          {item.type === sorting && (
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L3.5 6L1 3.72727"
                stroke="#1EA4CE"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </S.SortingRadio>
        <Label color="black600" weight={400} size={14} lineHeight={18}>
          {item.text}
        </Label>
      </S.SortingItem>
    ));
  }, [sorting]);

  return (
    <Flex flexDirection="column" margin="0 0 24px 0">
      <Label size={13} weight={600} color="gray">
        Sorting
      </Label>

      <S.SortingWrapper>{renderOptions}</S.SortingWrapper>
    </Flex>
  );
};

export default Sorting;
