import styled from "styled-components";
export default (wrapperComponent, styles) =>
  styled(wrapperComponent)`
    ${styles};
  `;
