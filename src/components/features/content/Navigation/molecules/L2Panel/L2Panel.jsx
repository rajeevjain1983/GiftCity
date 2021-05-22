import React from "react";
import Link from "next/link";
import withStyles from "../../../../../common/hoc/withStyle";
import { Row, BodyCopy } from "../../../../../common/atoms";
import style from "./L2Panel.style";

const L2Panel = (props) => {
  const { className, panelData } = props;
  return (
    <React.Fragment>
      <div className={`${className} nav-bar-l2-panel`}>
        <div className="space-between" />
        <div className="main-container">
          <Row className="content-wrapper">
            <Row className="list">
              {panelData &&
                panelData.map((category, categoryIndex) => {
                  const { displayName } = category || {};
                  return (
                    <React.Fragment>
                      <div className={`l2-nav-category`}>
                        {displayName && (
                          <div className="L2-panel-container">
                            <Link href="">
                              <BodyCopy
                                className="l2-nav-link"
                                fontFamily="secondary"
                                fontSize={["fs13", "fs13", "fs14"]}
                                lineHeight="lh107"
                                color="text.primary"
                              >
                                {displayName}
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
          <div className="horizontal-divider elem-pt-MED hide-on-desktop" />
        </div>
      </div>
    </React.Fragment>
  );
};
export { L2Panel as L2PanelVanilla };
export default withStyles(L2Panel, style);
