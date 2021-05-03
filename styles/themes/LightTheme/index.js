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
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f",
  spacing,
  mediaQuery,
  bodyBackgroundColor: common.white,
  fontColor: common.black,
};
