import React from "react";
import withStyles from "../../../../../common/hoc/withStyle";
import style from "./BackDrop.style";
const Backdrop = (props) => {
  return (
    <div className={props.className} onClick={props.close}>
      <div className="nav-sprite hmenu-close-icon"></div>
    </div>
  );
};

export { Backdrop as BackdropVanilla };
export default withStyles(Backdrop, style);
