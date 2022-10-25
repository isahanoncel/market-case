import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.OpenSans};
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.colors.white};
  }

`;

export const sizes = {
  mobile: ["0px", "768px"],
  tablet: ["768px", "1024px"],
};

export const device = {
  mobile: `@media (min-width: ${sizes.mobile[0]}) and (max-width: ${sizes.mobile[1]})`,
  tablet: `@media (min-width: ${sizes.tablet[0]}) and (max-width: ${sizes.tablet[1]})`,
};


