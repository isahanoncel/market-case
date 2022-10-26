import styled from 'styled-components';
import { device } from '../../../constants/styles/GlobalStyle';

export const FiltersWrapper = styled.div`
  button {
    display: none;
  }
  ${device.mobile} {
    button {
      display: block;
    }
  }
`;
