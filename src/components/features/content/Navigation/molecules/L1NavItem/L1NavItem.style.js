
import { css } from 'styled-components';
export default css`
  @media ${props => props.theme.mediaQuery.large} {
    .nav-bar-item-label {
      width: 100%;
      display: inline-block;
    }
    &.is-open {
      .nav-bar-l2 {
        display: block;
      }
    }
  }
`;
