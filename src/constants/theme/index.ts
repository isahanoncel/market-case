import { DefaultTheme } from 'styled-components';

export const COLORS = {
  white: '#fff',
  primary: '#1EA4CE',
  secondary: '#147594',
  black100: '#E0E0E0',
  black600: '#525252',
  gray: '#697488',
  background: '#E5E5E5',
  transparent: 'transparent',
  innerBorder: '#DFDEE2',
};

export const FONTS = {
  OpenSans: "'Open Sans', sans-serif",
};

const heroTheme: DefaultTheme = {
  colors: COLORS,
  fonts: FONTS,
};

export default heroTheme;
