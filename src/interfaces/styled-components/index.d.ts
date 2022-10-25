// #region Global Imports
import 'styled-components';
// #endregion Global Imports

export type Icons = 'Bag' | 'ArrowLeft';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'black100'
  | 'black600';

type Fonts = 'OpenSans';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Colors, string>;
    fonts: Record<Fonts, string>;
  }
}
