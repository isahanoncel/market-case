import React, { FC, memo } from 'react';
import Sorting from '../../molecules/Sorting';
import FilterBox from '../../molecules/FilterBox';

const Filters: FC = () => {
  return (
    <>
      <Sorting />
      <FilterBox items={[{ key: 'test', value: 't' }]} title="Brands" />
      <FilterBox items={[{ key: 'test', value: 't' }]} title="Brands" />
    </>
  );
};

export default memo(Filters, () => true);
