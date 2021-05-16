import { css } from "styled-components";



export default css`

  .main-navigation{
    margin:0 auto;
    width:100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    color: ${props=>props.theme.colors.common.white};
    font-size: 12pt;
    padding-top:4px;
  }


.main-navigation li{
  display: inline-block;
  border-bottom:  3px solid transparent;
  padding-bottom:10px;
  padding:${props=>props.theme.spacing.ELEM_SPACING.SM};
  cursor: pointer;
}
  .main-navigation li:hover{
    background-color:${props => props.theme.colors.common.white};
    color:${props => props.theme.colors.gray[1900]};
  }

  @media ${props => props.theme.mediaQuery.large} {
      .main-navigation{
      width:90%;
    }
  }

  
`;
