import styled from 'styled-components';

interface IStyledButton {
  backgroundColor?: string;
  color?: string;
  margin?: string;
  fullWidth?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  ${(props) => props.disabled && 'opacity:0.7;'};
  ${(props) => props.margin && `margin:${props.margin};`}
  ${(props) => props.fullWidth && `width:100%;`}

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor} ;`}
  ${(props) => props.color && `color: ${props.color} ;`}
  border: none;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 2px;
  cursor: pointer;
  min-width: 85px;
  min-height: 32px;
`;
