import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pageStyle.css";
import ListPost from "./ListPost";
import RightFilter from "./RightFilter";

export default function Home() {
  
  return (
    <>
      <Row className="mt-3 pb-5" style={{ marginLeft: "10%", marginRight: "20%" }}>
        <Col className="" md={9}>
          <ListPost />
        </Col>
        <Col className="md-down-collapse p-2" md={3}>
          <RightFilter />
        </Col>
      </Row>
    </>
  );
}
