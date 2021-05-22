import React, { useState } from "react";
// import Link from "next/link";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/header.style";
import Link from "next/link";
import Navigation from "../../Navigation";
import { Row, Col } from "../../../../common/atoms";

const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <div className={props.className}>
        <Row
          fullBleed
          className="container"
          ignoreGutter={{ small: true, medium: true, large: true }}
        >
          <Col colSize={{ small: 6, medium: 8, large: 3 }}>
            <div className="brand-logo-container">
              <div className="menu-button hide-on-desktop">
                <img
                  onClick={drawerToggleClickHandler}
                  alt="menu"
                  width="30px"
                  height="25px"
                  src="/icons/menu.png"
                />
              </div>
              <Link href="/">
                <img className="brand-logo" alt="Logo" src="giftCityName.png" />
              </Link>
            </div>
          </Col>
          <Col colSize={{ small: 6, medium: 8, large: 9 }}>
            <div className="search-bar">
              <img alt="Logo" src="search-bar-2.png" />
            </div>
          </Col>
        </Row>
        <Row fullBleed>
          <Col
            ignoreGutter={{ small: true, medium: true, large: true }}
            colSize={{ small: 6, medium: 8, large: 12 }}
            className="navigation-container"
          >
            <Navigation
              drawerOpen={drawerOpen}
              backdropClickHandler={backdropClickHandler}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default withStyle(Header, styles);
