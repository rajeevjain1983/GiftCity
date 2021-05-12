// 9fbef606107a605d69c0edbcd8029e5d
import React, { useCallback, useState } from "react";
import Link from "next/link";
import withStyles from "../../../../../common/hoc/withStyle";
import { getViewportInfo } from "../../../../../../utils";
import { Row, Col, BodyCopy } from "../../../../../common/atoms";
import { keyboard } from "../../../../../../constants/keyboard.constants";
import { HideDrawerConsumer } from "../L1NavItem/L1NavItem";
import style from "./L2Panel.style";
import { CLEARANCE_ID } from "../L1NavItem/L1NavItem.config";
import L2PanelUtils from "./L2Panel.utils";

const { KEY_ENTER, KEY_SPACE } = keyboard;

const {
  MAX_ITEMS_IN_COL,
  CONDITIONAL_MAX_ITEMS_IN_COL,

  L2PropTypes,
  L2DefaultPropTypes,
} = L2PanelUtils;

const L2Panel = (props) => {
  const {
    className,
    panelData,

    l1Id,
  } = props;

  const [nestedL2Group, setNestedL2Group] = useState("");

  const handleL2GroupClick = useCallback((e) => {
    e.preventDefault();
    const groupId = e?.target?.dataset?.groupId;
    setNestedL2Group(groupId);
  });

  console.log("__ panelData", panelData);
  return (
    <HideDrawerConsumer>
      {(context) => (
        <React.Fragment>
          <div className={`${className} nav-bar-l2-panel`}>
            <div className="space-between" />
            <div className="horizontal-divider" />
            <div className="main-container">
              <Row className="content-wrapper">
                <Row
                  className="list"
                  tabIndex={-1}
                  fullBleed={{
                    small: true,
                    medium: true,
                  }}
                >
                  {panelData &&
                    panelData.map((category, categoryIndex) => {
                      const { displayName, name } = category || {};
                      return (
                        <React.Fragment>
                          <div className={`l2-nav-category`}>
                            {displayName && (
                              <div className="L2-panel-container">
                                <Link
                                  href={`c/${name}`}
                                  className="group-link"
                                  onClick={(e) => handleL2GroupClick(e)}
                                >
                                  <BodyCopy
                                    className="l2-nav-link"
                                    fontFamily="secondary"
                                    fontSize={["fs13", "fs13", "fs14"]}
                                    lineHeight="lh107"
                                    color="text.primary"
                                    data-group-id={displayName}
                                  >
                                    <span data-group-id={displayName}>
                                      {displayName}
                                    </span>
                                  </BodyCopy>
                                </Link>
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}
                </Row>
              </Row>
            </div>
          </div>
        </React.Fragment>
      )}
    </HideDrawerConsumer>
  );
};

L2Panel.propTypes = L2PropTypes;

L2Panel.defaultProps = L2DefaultPropTypes;

export { L2Panel as L2PanelVanilla };
export default withStyles(L2Panel, style);

{
  /* <Col colSize={{ small: 6, medium: 8, large: 12 }} ignoreGutter={{ large: true }}></Col> */
}
