import { css } from "styled-components";

export default css`
 
.container{
  display: flex;
  padding: ${props=>props.theme.spacing.ELEM_SPACING.SM} 0 0 0;
}
.menu-button{
  margin-top:${props=>props.theme.spacing.ELEM_SPACING.XXS};
  padding:${props=>props.theme.spacing.ELEM_SPACING.XXS};
  display:flex;
  align-items:center;
}
.shadow-line{
  height:8px;
  background-color:${props=>props.theme.colors.common.tColor};
}

@media ${props => props.theme.mediaQuery.large} {
  .navigation-container{
  background:${props=>props.theme.bodyBackgroundColor};
}
}
.brand-logo-container{
  display:flex;
  flex-direction:row;
  align-items: center;
  padding-left:${props=>props.theme.spacing.ELEM_SPACING.SM};
}
  
  .brand-logo {
    padding-left:${props=>props.theme.spacing.ELEM_SPACING.XS};
    width: 130px;
    height: 40px;
  }
  .search-bar{
    max-width: 500px;
  }
  .cart{
    width: 60px;
    padding-right:${props=>props.theme.spacing.ELEM_SPACING.XS};
  }
  

  @media ${props => props.theme.mediaQuery.large} {
    .brand-logo {
    width: 190px;
    height: 55px;
  }
  }
`;
