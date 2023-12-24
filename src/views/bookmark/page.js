import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pageStyle.css";
// import { useState } from "react";
import SavedListPost from "./SavedListPost";
import { useEffect } from "react";
import RightFilter from "./RightFilter";

export default function Bookmark({ setCurNavOption }) {
  useEffect(() => {
    setCurNavOption(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Row
        className="mt-3 pb-5"
        style={{ marginLeft: "10%", marginRight: "20%" }}
      >
        <Col className="" md={9}>
          <SavedListPost />
        </Col>
        <Col className="md-down-collapse p-2" md={3}>
          <RightFilter />
        </Col>
      </Row>
    </>
  );
}
