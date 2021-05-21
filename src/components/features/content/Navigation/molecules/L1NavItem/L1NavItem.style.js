
import { css } from 'styled-components';
export default css`
  /* @media ${props => props.theme.mediaQuery.large} { */
    .nav-bar-item-label {
      width: 100%;
      display: inline-block;
    }
    &.is-open {
      .nav-bar-l2 {
        display: block;
      }
      .nav-bar-l1-content{
        .icon-arrow{
          background: url(/icons/carrot-small-down.png) no-repeat;
        }
      }
    }
  .icon-arrow{
    background: url(/icons/carrot-small-rights.png) no-repeat;
    width: 10px;
    height: 10px;
    display: inline-block;
    }

    

    .nav-bar-l1-content{
      display:flex;
    }

  /* } */
`;
