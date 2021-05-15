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
        <Row className="container">
          <Link href="/">
            <a className="headerLink" href="/">
              <img className="headerImage" alt="Logo" src="giftCityName.png" />
            </a>
          </Link>

          <span>
            <img className="search-bar" alt="Logo" src="search-bar-2.png" />
          </span>

          <span>
            <img className="header-item3" alt="Logo" src="header-item3.png" />
          </span>
        </Row>
        <Row>
          <Col className="navigation-container">
            <Navigation />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default withStyle(Header, styles);
