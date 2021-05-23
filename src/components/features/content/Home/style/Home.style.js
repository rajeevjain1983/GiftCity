import { css } from "styled-components";

export default css`
  /* width: 100%; */
  /* margin: 0px auto; */
  /* padding:0px 12px; */

  /* border:1px solid red; */

  .home-banner-container{
    /* margin:0 200px; */
    /* border:1px solid red; */
  }


.slick-dots{
  /* border:2px solid green; */
}
  
@media ${props => props.theme.mediaQuery.smallMax},${props => props.theme.mediaQuery.mediumOnly} {
  .home-banner-item-img{
    height:190px; 

  }
}
`;
