import React, { FC, memo, useEffect, useState } from 'react';
import Sorting from '../../molecules/Sorting';
import FilterBox from '../../molecules/FilterBox';
import { ICompany } from '../../../interfaces/company';
import { IOption } from '../../../interfaces/option';

interface IFilters {
  companies: ICompany[];
  tags: string[];
}

const Filters: FC<IFilters> = ({ companies, tags }) => {
  const [brandOptions, setBrandOptions] = useState<IOption[]>([]);
  const [tagOptions, setTagOptions] = useState<IOption[]>([]);

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
  return (
    <>
      <Sorting />
      <FilterBox items={brandOptions} type="brand" title="Brands" />
      <FilterBox items={tagOptions} type="tag" title="Tags" />
    </>
  );
};

export default memo(Filters);
