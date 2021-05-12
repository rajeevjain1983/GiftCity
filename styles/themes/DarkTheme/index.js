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
  primaryColor: common.primaryColor,
  secondaryColor: blue["1000"],
  menuHover:'#F304F5',
  bottomBorderColor:blue.D100,
  spacing,
  mediaQuery,
  bodyBackgroundColor: common.primaryColor,
  fontColor: common.white,
};
