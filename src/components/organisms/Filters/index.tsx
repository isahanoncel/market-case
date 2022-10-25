import React, { FC, memo } from 'react';
import Sorting from '../../molecules/Sorting';

const Filters: FC = () => {
  return (
    <>
      <Sorting />
      <div>filters</div>
    </>
  );
};

export default memo(Filters, () => true);
