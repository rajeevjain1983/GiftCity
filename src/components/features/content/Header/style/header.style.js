import { css } from "styled-components";

export default css`
  

.container{
  display: flex;
  align-items: center;
  padding: 0px;
}
.navigation-container{
  
  background:${props=>props.theme.primaryColor};
}
  
  .headerImage {
    width: 190px;
    height: 55px;
    margin-left: 30px;
  }
  /* .headerLink {
    color: red;
    margin: 0px 5px 0px 10px;
  } */
  .search-bar{
    width: 606px;
    margin-left: 82px;
  }
  .header-item3{
    width: 450px;
  }
  
  
`;
