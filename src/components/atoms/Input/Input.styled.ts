import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  margin-bottom: 17px;
`;
export const StyledInput = styled.input`
  font-size: 14px;
  outline: none;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.black600};
  border: 2px solid ${({ theme }) => theme.colors.black100};
  border-radius: 2px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black100};
  }
`;
