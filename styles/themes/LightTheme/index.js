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
  name: "lightTheme",
  primaryColor: common.secondaryColor,
  menuHover:'#F304F5',
  bottomBorderColor:blue.D100,
  secondaryColor: "#fdd54f",
  spacing,
  mediaQuery,
  bodyBackgroundColor: common.white,
  fontColor: common.black,
};
