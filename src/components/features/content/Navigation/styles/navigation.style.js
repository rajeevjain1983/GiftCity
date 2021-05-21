import { css } from "styled-components";



export default css`

  .main-navigation{
      display: flex;
      flex-direction:column;
      font-size: 16px;
      height:100%;
    }

    .main-navigation li{
      display: inline-block;
      border-bottom:  3px solid transparent;
      padding-bottom:${props=>props.theme.spacing.ELEM_SPACING.SM};
      padding:${props=>props.theme.spacing.ELEM_SPACING.SM};
    }
    .horizontal-divider{
    border-bottom: 1px solid ${props => props.theme.colors.gray[500]};
    }

    .customer-name-container{
      display:flex;
      padding:${props=>props.theme.spacing.ELEM_SPACING.MED} 0 0 ${props=>props.theme.spacing.ELEM_SPACING.SM};
      font-size: 19px;
      color: #111;
      font-weight: bold;
    }
    .avatar-icon{
      background-size: 275px;
      height: 25px;
      width: 27px;
      background-position: -113px -270px;
    }
  

  @media ${props => props.theme.mediaQuery.large} {
      .main-navigation{
      margin:0 auto;
      width:90%;
      position: relative;
      flex-direction:row;
      justify-content: space-between;
      color: ${props=>props.theme.colors.common.white};
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
  }
  
`;
