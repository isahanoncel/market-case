import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { IOption } from '../../../interfaces/option';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setBrands, setTags } from '../../../store/slices/filter';
import Flex from '../../atoms/Flex';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import * as S from './FilterBox.styled';

interface IFilterBox {
  title: string;
  items: IOption[];
  type?: string;
}

const FilterBox: FC<IFilterBox> = ({ title, items, type }) => {
  const [filteredItems, setFilteredItems] = useState<IOption[]>(items);
  const [keyword, setKeyword] = useState<string>('');
  const brands = useAppSelector((a) => a.filter.brands);
  const tags = useAppSelector((a) => a.filter.tags);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.key.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
  }, [keyword, items, brands, tags]);

  const handleSetFilterItem = useCallback((data: string) => {
    if (type === 'tag') {
      dispatch(setTags(data));
      return;
    }

    dispatch(setBrands(data));
  }, []);

  const renderItems = useMemo(() => {
    return filteredItems.map((item) => {
      const isItemChecked = (type === 'tag' ? tags : brands)?.includes(
        item.value,
      );
      return (
        <S.FilterItem
          key={item.key}
          onClick={() => handleSetFilterItem(item.value)}
        >
          <S.FilterCheck checked={isItemChecked}>
            {isItemChecked && (
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L3.5 6L1 3.72727"
                  stroke="#FFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </S.FilterCheck>
          <Flex alignItems="center">
            <Label color="black600" weight={600} size={14}>
              {item.key}
            </Label>

            <Label color="thinGray" size={14} margin="0 0 0 4px">
              (18)
            </Label>
          </Flex>
        </S.FilterItem>
      );
    });
  }, [filteredItems]);

  return (
    <Flex flexDirection="column" margin="24px 0 0 0">
      <Label size={13} weight={600} color="gray">
        {title}
      </Label>

      <S.FilterBoxWrapper>
        <Input
          onChange={(text) => setKeyword(text)}
          placeholder={`Search ${title}`}
        />
        <S.FilterListWrapper>{renderItems}</S.FilterListWrapper>
      </S.FilterBoxWrapper>
    </Flex>
  );
};

export default FilterBox;
