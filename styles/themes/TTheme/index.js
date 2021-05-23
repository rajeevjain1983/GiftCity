import {
  red,
  blue,
  common,
  gray,
  green,
  orange,
  pink,
  yellow,
} from "../colors";
import spacing from "../spacing";
import { mediaQuery,breakpoints } from "../mediaQuery";
import gridDimensions from '../gridDimensions';

export default {
  colors: { red, blue, common, gray, green, orange, pink, yellow },
  name: "TTheme",
  spacing,
  mediaQuery,
  bodyBackgroundColor: common.tColor,
  fontColor:gray[1900],
  gridDimensions,
  breakpoints
};
