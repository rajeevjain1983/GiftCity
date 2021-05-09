// 9fbef606107a605d69c0edbcd8029e5d 
import { css } from 'styled-components';

const applyBrandSpecificColor = props => {
  return props.theme.isGymboree
    ? props.theme.colorPalette.orange[800]
    : props.theme.colors.BRAND.PRIMARY;
};

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1400;

  .tcp-circle {
    display: inline-block;
    position: relative;
    width: 5px;
    height: 5px;
    margin-right: 40px;
  }
  .tcp-circle div {
    position: absolute;
    top: 27px;
    width: 8px;
    height: 8px;
    @media ${props => props.theme.mediaQuery.medium} {
      width: 12px;
      height: 12px;
    }
    border-radius: 100%;
    background: ${props => applyBrandSpecificColor(props)};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .tcp-circle div:nth-child(1) {
    left: 6px;
    animation: tcp-circle1 0.6s infinite;
  }
  .tcp-circle div:nth-child(2) {
    left: 6px;
    animation: tcp-circle2 0.6s infinite;
  }
  .tcp-circle div:nth-child(3) {
    left: 26px;
    animation: tcp-circle2 0.6s infinite;
  }
  .tcp-circle div:nth-child(4) {
    left: 45px;
    animation: tcp-circle3 0.6s infinite;
  }
  @keyframes tcp-circle1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes tcp-circle3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes tcp-circle2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
