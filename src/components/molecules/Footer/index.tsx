import React, { FC } from 'react';
import Flex from '../../atoms/Flex';
import Label from '../../atoms/Label';

const FilterBox: FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" margin="0 0 87px 0">
      <Label color="primary" size={13} weight={300}>
        ©2019 Market • Privacy Policy
      </Label>
    </Flex>
  );
};

export default FilterBox;
