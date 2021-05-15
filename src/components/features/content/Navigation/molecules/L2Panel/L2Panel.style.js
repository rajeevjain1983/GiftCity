
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

.nav-bar-l2-details{

  border:1px solid red;
}






 



  /* border:2px solid green; */
 
  /* z-index: 1200; */

  /* .L2-panel-container {
    @media ${props => props.theme.mediaQuery.large} {
      padding-right: 50px;
    }
  } */

  /* .shop-by-size-links {
    padding: 10px 14px 10px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      @media ${props => props.theme.mediaQuery.large} {
        flex-wrap: unset;
        justify-content: space-between;
      }
    }
  } */
  /* .shop-by-size-links li {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.gray[800]};
    width: 40px;
    height: 40px;
    border-radius: 20px 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 16px;
    margin-right: 18px;
    &:nth-child(n + 5) {
      margin-right: 0;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    @media ${props => props.theme.mediaQuery.large} {
      width: 38px;
      height: 38px;
    }
  } */
  /* .shop-by-size-links li:hover {
    border: solid 1px
      ${props =>
        props.theme.isGymboree
          ? props.theme.colors.orange[800]
          : props.theme.colors.blue[800]};
    background-color: ${props =>
      props.theme.isGymboree
        ? props.theme.colors.orange[100]
        : props.theme.colors.blue[100]};
  } */
 
  /* .sizes-range-background {
    min-height: 40px;
    text-align: center;
    position: relative;
    border-bottom: 1px solid ${props => props.theme.colors.gray[500]};
    margin: 0 14px;
  } */

  /* .l2-nav-link {
    display: flex;
    align-items: center;
    padding: 18px 14px 17px 28px;
    line-height: 1.15;
    &.highlighted {
      color: red;
    }
  } */

  /* .l2-nav-category-heading {
    margin: 0;
    padding: 18px 14px 17px 14px;
    background-color: ${props =>
      props.theme.isGymboree
        ? props.theme.colors.orange[50]
        : props.theme.colors.blue[50]};
  } */

  /* .s-display-none {
    display: none;
  } */

  /* .dark-overlay {
    display: none;
    background-color: green;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100vh;
    opacity: 0.6;
    width: 100%;
  } */
 
  /* @media ${props => props.theme.mediaQuery.large} { */
   
    /* top: 100%;
    z-index: 2px; */
    /* border-top: 1px solid ${props => props.theme.colors.gray[300]}; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25); */

    /* .s-display-none {
      display: block;
    }
    .icon-back,
    .l1-label,
    .nav-bar-item-sizes-range {
      display: none;
    }
    .l2-nav-category {
      box-sizing: border-box;
      border-right: 1px solid ${props => props.theme.colors.gray[500]};
      margin-top: 36px;
      margin-bottom: 36px;
    }
    .l2-nav-category.shop-by-size-category {
      border-right: 0;
    }
    .l2-nav-category.no-border {
      border-right: 0;
    }
    .l2-nav-category-header {
      margin-bottom: 24px;
    }
    .l2-nav-category-empty-header {
      margin-bottom: 61px;
    }
    .l2-nav-category-heading {
      padding: 0 0 15px 0;
      background: none;
    } */
    
    
  /* } */
`;
