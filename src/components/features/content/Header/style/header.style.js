import { css } from "styled-components";

export default css`
 
.container{
  display: flex;
  padding: 12px 0 0 0;
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
  padding-left:12px;
}
  
  .brand-logo {
    padding-left:8px;
    width: 130px;
    height: 40px;
  }
  .search-bar{
    max-width: 500px;
  }
  .cart{
    width: 60px;
    padding-right:8px;
  }
  

  @media ${props => props.theme.mediaQuery.large} {
    .brand-logo {
    width: 190px;
    height: 55px;
  }
  }
`;
