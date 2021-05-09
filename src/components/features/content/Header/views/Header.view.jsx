import React from "react";
// import Link from "next/link";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/header.style";
import Navigation from "../../Navigation";
import { Row, Col } from "../../../../common/atoms";

const Header = (props) => {
  return (
    <>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
    </>
  );
};

export default withStyle(Header, styles);
