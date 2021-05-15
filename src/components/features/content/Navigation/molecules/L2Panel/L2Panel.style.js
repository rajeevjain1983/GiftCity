
import { css } from 'styled-components';

export default css`
  position: absolute;
  display: none;
  top: 20;
  left: 0;
  width: 100%;
  background:transparent;
  .main-container{
    background:${props => props.theme.primaryColor};
    opacity:90%;
    padding:0 ${(props) => props.theme.spacing.ELEM_SPACING.LRG} 0 30px;
    padding:20px 20px 50px 20px;
  }

.space-between{
  padding:${props=>props.theme.spacing.ELEM_SPACING.XS};
  background:transparent;
  
}
.horizontal-divider{
  background-color:${(props) => props.theme.menuHover};
   padding:4px;
   box-shadow: 0 -5px 5px -5px #F6b2f7;
}
.list{
  display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    max-height: 200px;
    min-height:200px;
}

.l2-nav-link{
  display: inline-block;
  border-bottom:  3px solid transparent;
  padding-bottom:10px;
  padding:8px;
  cursor: pointer;
}
.l2-nav-link  :hover{
  border-bottom:  3px solid ${(props) => props.theme.bottomBorderColor};
  background-color:${(props) => props.theme.menuHover};
}
`;
