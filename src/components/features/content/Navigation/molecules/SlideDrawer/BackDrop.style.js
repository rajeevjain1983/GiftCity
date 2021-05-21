
import { css } from 'styled-components';

export default css`
 @media ${props => props.theme.mediaQuery.smallOnly},${props => props.theme.mediaQuery.mediumOnly} {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    z-index: 100;
    top: 0;
    right: 0;

    .hmenu-close-icon {
    background-position: -131px -173px;
    right: 8vw;
    top: 40px;
    position: fixed;
    width: 20px;
    height:20px;
    }

   
 }
`;
