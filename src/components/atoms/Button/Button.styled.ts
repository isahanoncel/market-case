import styled from 'styled-components';

interface IStyledButton{
  backgroundColor?:string
}

export const StyledButton = styled.button<IStyledButton>`
  background-color: ${(props) => props.backgroundColor};
  ${(props) => props.disabled && 'opacity:0.7;'};
  border: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 6px;
  cursor: pointer;
  min-width: 85px;
  min-height: 32px;
`;
