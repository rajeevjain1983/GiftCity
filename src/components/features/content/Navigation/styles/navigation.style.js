import { css } from "styled-components";



export default css`
  .main-navigation{
    margin:0 auto;
    width:70%;
    position: relative;
    display: flex;
    justify-content: space-between;
    color: ${props=>props.theme.colors.common.white};
    padding:${props=>props.theme.spacing.ELEM_SPACING.XS} 0;
    font-size: 12pt;
  }


.main-navigation li{
  display: inline-block;
  border-bottom:  3px solid transparent;
  padding-bottom:10px;
  padding:${props=>props.theme.spacing.ELEM_SPACING.XS};
  cursor: pointer;
}
  .main-navigation li:hover{
    border-bottom:  3px solid ${(props) => props.theme.bottomBorderColor};
    background-color:${(props) => props.theme.menuHover};
  }

  
`;
