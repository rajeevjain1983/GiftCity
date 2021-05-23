
import { css } from 'styled-components';

export default css`
display: none;
z-index:100;
.l2-nav-link{
  display: inline-block;
  padding-bottom:10px;
  padding:8px;
  cursor: pointer;
}
.list{
    display: flex;
    flex-direction: column;
}
.horizontal-divider{
  border-bottom: 1px solid ${props => props.theme.colors.gray[500]};
}

@media ${props => props.theme.mediaQuery.smallMax},${props => props.theme.mediaQuery.mediumOnly} {
padding-top:${(props) => props.theme.spacing.ELEM_SPACING.MED} ;
}
@media ${props => props.theme.mediaQuery.large} {
  top: 20;
  left: 0;
  width: 100%;
  background:transparent;
  position: absolute;
  .main-container{
    background:${props => props.theme.colors.common.white};
    opacity:95%;
    padding:0 ${(props) => props.theme.spacing.ELEM_SPACING.LRG} 0 30px;
    padding:20px 20px 50px 20px;
    color:${props => props.theme.colors.gray[1900]};
  }

.space-between{
  padding:7.5px;
  background:transparent;
  
}

.list{
    flex-direction: column;
    flex-wrap:wrap;
    max-height: 200px;
    min-height:200px;
}


.l2-nav-link  :hover{
  background-color:rgb(243, 243, 243)
}
}
`;
