import React, { FC } from 'react';
import Flex from '../Flex';
import * as S from './Input.styled';

interface IInput {
  type?: string;
  placeholder: string;
  onChange: (value: string) => void;
}
const Input: FC<IInput> = ({ type = 'text', placeholder, onChange }) => {
  return (
    <S.StyledInputWrapper>
      <Flex flexDirection="column">
        <S.StyledInput
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          type={type}
        />
      </Flex>
    </S.StyledInputWrapper>
  );
};

export default Input;
