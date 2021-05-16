
import { css } from 'styled-components';

export default css`
  position: absolute;
  display: none;
  top: 20;
  left: 0;
  width: 100%;
  background:transparent;
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
.horizontal-divider{
  background-color:${props => props.theme.colors.common.white};
   padding:4px;
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
  padding-bottom:10px;
  padding:8px;
  cursor: pointer;
}
.l2-nav-link  :hover{
  background-color:rgb(243, 243, 243)
}
`;
