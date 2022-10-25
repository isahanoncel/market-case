import React, { FC } from "react";
import Flex from "../Flex";
import Label from "../Label";
import * as S from "./Input.styled";

interface IInput {
  type?: string;
  placeholder: string;
  onChange:(value:string) => void;
}
const Input: FC<IInput> = ({ type = "text", placeholder,onChange }) => {
  return (
    <S.StyledInputWrapper>
      <Flex flexDirection="column">
        <Label size={14} weight={400} color="black100">
        {placeholder}
        </Label>
        <S.StyledInput onChange={(e) => onChange(e.target.value)} type={type} />
      </Flex>
    </S.StyledInputWrapper>
  );
};

export default Input;
