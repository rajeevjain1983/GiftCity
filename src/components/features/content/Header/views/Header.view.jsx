import React from "react";
// import Link from "next/link";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/header.style";
import Link from "next/link";
import Navigation from "../../Navigation";
import { Row, Col } from "../../../../common/atoms";

const Header = (props) => {
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
              <img
                className="hide-on-desktop"
                alt="menu"
                width="25px"
                height="20px"
                src="/icons/menu.png"
              />
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
            <Navigation />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default withStyle(Header, styles);
