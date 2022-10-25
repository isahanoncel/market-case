import React, { FC, useEffect, useMemo, useState } from 'react';
import { IOption } from '../../../interfaces/option';
import Flex from '../../atoms/Flex';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import * as S from './FilterBox.styled';

interface IFilterBox {
  title: string;
  items: IOption[];
}

const FilterBox: FC<IFilterBox> = ({ title, items }) => {
  const [filteredItems, setFilteredItems] = useState<IOption[]>(items);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.key.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
  }, [keyword]);

  const renderItems = useMemo(() => {
    return filteredItems.map((item) => (
      <S.FilterItem key={item.key}>
        <S.FilterCheck checked>
          {item.key === 't' && (
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
    ));
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
        {renderItems}
      </S.FilterBoxWrapper>
    </Flex>
  );
};

export default FilterBox;
