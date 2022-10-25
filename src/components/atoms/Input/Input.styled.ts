import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: block;
  margin-bottom: 15px;
`;
export const StyledInput = styled.input`
  margin-top: 5px;
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 15px 5px;
  color: ${({ theme }) => theme.colors.black100};
  border: 1px solid ${({ theme }) => theme.colors.black100};
`;
