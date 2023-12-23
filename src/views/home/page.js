import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pageStyle.css";
import ListPost from "./ListPost";
import RightFilter from "./RightFilter";
import { useState } from "react";

export default function Home({
  listPost,
  setListPost,
  sortType,
  setSortType,
  curPage,
  setCurPage,
  setCurNavOption,
  useRightFilter,
  setUseRightFilter,
  setFilterCondition,
}) {
  const [priceRangeRF, setPriceRangeRF] = useState();
  const [areaRangeRF, setAreaRangeRF] = useState();

  return (
    <>
      <Row
        className="mt-3 pb-5"
        style={{ marginLeft: "10%", marginRight: "20%" }}
      >
        <Col className="" md={9}>
          <ListPost
            listPost={listPost}
            setListPost={setListPost}
            sortType={sortType}
            setSortType={setSortType}
            curPage={curPage}
            setCurPage={setCurPage}
            setCurNavOption={setCurNavOption}
            useRightFilter={useRightFilter}
            priceRangeRF={priceRangeRF}
            areaRangeRF={areaRangeRF}
          />
        </Col>
        <Col className="md-down-collapse p-2" md={3}>
          <RightFilter
            setUseRightFilter={setUseRightFilter}
            setFilterCondition={setFilterCondition}
            setPriceRangeRF={setPriceRangeRF}
            setAreaRangeRF={setAreaRangeRF}
          />
        </Col>
      </Row>
    </>
  );
}
