import styled from 'styled-components';

export const HomeTemplateWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderLink = styled.a`
  margin: auto;
`;
