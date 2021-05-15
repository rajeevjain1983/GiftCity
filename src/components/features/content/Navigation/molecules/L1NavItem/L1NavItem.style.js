
import { css } from 'styled-components';
export default css`
  /* margin: 0px 12px; */
  
  
  /* border:1px solid blue; */
  /* margin-bottom:30px; */

  /* &.is-open {
    background: ${props => props.theme.colors.gray[300]};
  } */

  /* span {
    display: inline-block;
  }
  .nav-bar-l1-content {
    display: flex;
    padding: 18px 0 17px 0;
    outline: 0;
  } */
  /* .icon-arrow {
    background: url(${darkArrow}) no-repeat;
    width: 10px;
    height: 10px;
  } */
  /* .nav-bar-item-label {
    width: 45%;
    cursor: pointer;
    @media ${props => props.theme.mediaQuery.large} {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.highlighted {
      color: red;
    }
    &.full-width {
      width: 96%;
    }
  } */
  /* .nav-bar-item-content {
    width: 51%;
    color: red;
  } */

  @media ${props => props.theme.mediaQuery.large} {
    /* padding: 0;
    color: white;
    span {
      display: inline;
    } */
    /* .nav-bar-item-content,
    &.show-on-mobile {
      display: none;
    } */
    /* .nav-bar-l1-content {
      display: block;
      cursor: pointer;
      position: relative;
      padding: 38px 20px 5px 20px;
    } */
    .nav-bar-item-label {
      width: 100%;
      display: inline-block;

      /* border:1px solid red; */
    }
    /* &.l1-overlay.is-open {
      background: transparent;
      position: absolute;
      top: 75px;
      z-index: 1;
      opacity: 0.6;
      width: 100%;
      left: 0%;
      height: 200vh;
    } */
    &.is-open {
     
      .nav-bar-l2 {
        display: block;
        /* border:1px solid green; */
      }
      /* .nav-bar-item-sizes-range {
        cursor: default;
        position: absolute;
        display: block;
        top: calc(100% + 15px);
        left: 0;
        width: 100%;
        color: ${props => props.theme.colors.gray[900]};
        text-align: center;
        font-weight: 600;
        z-index: 1201;
        white-space: nowrap;
      } */
    }
  }
`;
