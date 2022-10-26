import React, { FC, memo, useEffect, useLayoutEffect, useState } from 'react';
import Sorting from '../../molecules/Sorting';
import FilterBox from '../../molecules/FilterBox';
import { ICompany } from '../../../interfaces/company';
import { IOption } from '../../../interfaces/option';
import Button from '../../atoms/Button';
import * as S from './Filters.styled';

interface IFilters {
  companies: ICompany[];
  tags: string[];
}

const Filters: FC<IFilters> = ({ companies, tags }) => {
  const [brandOptions, setBrandOptions] = useState<IOption[]>([]);
  const [tagOptions, setTagOptions] = useState<IOption[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  useEffect(() => {
    setBrandOptions(
      companies.map((company) => {
        return { key: company.name, value: company.slug };
      }),
    );
  }, [companies]);

  useEffect(() => {
    setTagOptions(
      tags.map((tag) => {
        return { key: tag, value: tag };
      }),
    );
  }, [tags]);

  useLayoutEffect(() => {
    setShowFilters(window.innerWidth >= 1024);
  }, []);

  return (
    <S.FiltersWrapper>
      <Button
        margin="0 0 8px 0"
        fullWidth
        onClick={() => setShowFilters((prev) => !prev)}
      >
        Filters
      </Button>
      {showFilters && (
        <>
          <Sorting />
          <FilterBox items={brandOptions} type="brand" title="Brands" />
          <FilterBox items={tagOptions} type="tag" title="Tags" />
        </>
      )}
    </S.FiltersWrapper>
  );
};

export default memo(Filters);
