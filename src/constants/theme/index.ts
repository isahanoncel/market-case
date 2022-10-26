import { DefaultTheme } from 'styled-components';

export const COLORS = {
  white: '#fff',
  primary: '#1EA4CE',
  whiteBlue: '#F2F0FD',
  secondary: '#147594',
  black100: '#E0E0E0',
  black500: '#6F6F6F',
  black600: '#525252',
  gray: '#697488',
  background: '#E5E5E5',
  transparent: 'transparent',
  innerBorder: '#DFDEE2',
  thinGray: '#A8A8A8',
};

export const FONTS = {
  OpenSans: "'Open Sans', sans-serif",
};

const heroTheme: DefaultTheme = {
  colors: COLORS,
  fonts: FONTS,
};

export default heroTheme;
