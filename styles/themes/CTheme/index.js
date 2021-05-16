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
import { mediaQuery } from "../mediaQuery";

export default {
  colors: { red, blue, common, gray, green, orange, pink, yellow },
  name: "CTheme",
  spacing,
  mediaQuery,
  bodyBackgroundColor: common.cColor,
  fontColor:gray[1900],
};
