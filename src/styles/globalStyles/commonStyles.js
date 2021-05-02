import { css } from "styled-components";

export default css`
  @font-face {
    font-family: "verdana";
    font-style: normal;

    src: url("/verdana.ttf");
  }
  body {
    font-family: "verdana, Geneva, sans-serif";
    font-size: 12pt;
    color: #828282;
    overflow-x: hidden;
    width: 100%;
    margin: 0 auto;
  }
`;
