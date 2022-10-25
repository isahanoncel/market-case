// #region Global Imports
import 'styled-components';
// #endregion Global Imports

export type Icons = 'Bag' | 'ArrowLeft' | 'Check';

export type Colors =
  | 'primary'
  | 'gray'
  | 'secondary'
  | 'white'
  | 'background'
  | 'transparent'
  | 'innerBorder'
  | 'black100'
  | 'black600';

type Fonts = 'OpenSans';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Colors, string>;
    fonts: Record<Fonts, string>;
  }
}
