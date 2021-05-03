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
  name: "darkTheme",
  primaryColor: common.black,
  secondaryColor: blue["1000"],
  spacing,
  mediaQuery,
  bodyBackgroundColor: common.black,
  fontColor: common.white,
};
