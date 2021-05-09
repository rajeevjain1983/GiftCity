import React from "react";
// import Link from "next/link";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../styles/navigation.style";
import { Row, Col } from "../../../../common/atoms";

const Navigation = (props) => {
  const { navigationData } = props;
  return (
    <>
      <Row>
        <Col>
          <ul>
            <li>{JSON.stringify(navigationData)}</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default withStyle(Navigation, styles);
