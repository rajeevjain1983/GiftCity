
import { css } from 'styled-components';

export default css`

@media ${props => props.theme.mediaQuery.smallMax},${props => props.theme.mediaQuery.mediumOnly} {
      .side-drawer { 
         height: 100%;
         background: white;
         position: fixed;
         top: 0;
         left: 0;
         width: 75%;
         z-index: 200;
         pointer-events: auto;
         transform: translateX(-100%);
         transition:  transform  0.3s ease-out;
      }
      .side-drawer.open {
         transform: translateX(0);
      }  
      .nav-list{
         overflow-y:scroll;
         height:100%;
      }
}
`;
