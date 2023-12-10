import { IBadroom, IBedroom } from "../../common/icons";
import { sortTypes } from "../../constants";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { LuDot } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import clsx from "clsx";
import postApi from "../../apis/postApi";

export default function ListPost() {
  const [listPost, setListPost] = useState([]);
  const perPage = 3;
  const pageNum = Math.ceil(listPost.length / perPage);
  const [curPage, setCurPage] = useState(1);
  const [curPageStartIndex, setCurPageStartIndex] = useState(0);
  const [sortType, setSortType] = useState(0);

  const getListPost = async () => {
    const res = await postApi.getList({ sortType: sortType });
    console.log("listpost::", res);
    setListPost(res);
  };
  const handleBack = () => {
    if (curPage > 1) {
      setCurPage(curPage - 1);
    }
  };
  const handleNext = () => {
    if (curPage < pageNum) {
      setCurPage(curPage + 1);
    }
  };
  useEffect(() => {
    setCurPageStartIndex((curPage - 1) * perPage);
  }, [curPage]);
  useEffect(() => {
    setCurPage(1)
    getListPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <>
      <div className="text-main">Hiện có {listPost.length} kết quả</div>
      <Form className="mb-3">
        <Form.Group>
          <Form.Label>Sắp xếp:</Form.Label>
          <Form.Select
            size="md"
            className="w-25 d-inline-block ms-3 mt-2 border-success text-secondary"
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            {sortTypes?.map((item, index) => (
              <option value={item.value} key={index} style={{fontSize: '18px'}}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      {listPost.length > 0 &&
        Array.from({ length: perPage }, (_, index) => {
          if (curPageStartIndex + index > listPost.length - 1) return null;
          let item = listPost[curPageStartIndex + index];
          let images = item.images;
          return (
            <div className="border-main rounded p-2 mb-4 shadow" key={index}>
              <div className="d-flex" style={{ maxHeight: "300px" }}>
                <img
                  className="pe-1"
                  src={images[0].url}
                  alt={images[0].url}
                  width="34%"
                />
                <div style={{ width: "32%" }}>
                  <img
                    className="pe-1 pb-1"
                    src={images[1].url}
                    alt={images[1].url}
                    style={{ width: "100%", maxHeight: "50%" }}
                  />
                  <img
                    className="pe-1"
                    src={images[2].url}
                    alt={images[2].url}
                    style={{ width: "100%", maxHeight: "50%" }}
                  />
                </div>
                <img src={images[3].url} alt={images[3].url} width="34%" />
              </div>
              <div
                className="fw-bold mt-2"
                style={{ fontSize: "20px", cursor: "pointer" }}
              >
                {item.title}
              </div>
              <div className="mt-2">
                <div className="d-inline-block fw-bold text-danger">
                  {item.price / 1000000} triệu/tháng
                  <LuDot className="mx-1" />
                  {item.land_area} m<sup>2</sup>
                </div>
                <div className="d-inline-block ms-4">
                  {item.bedroom_num} <IBedroom />
                  <LuDot className="mx-1" />
                  {item.bedroom_num} <IBadroom />
                  <LuDot className="mx-1" />
                  {item.district}
                  {", Hà Nội"}
                </div>
                <AiOutlineHeart
                  className="text-danger ms-4"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="mt-2 fw-bold">Địa chỉ: {item.address}</div>
              <small>
                Đã đăng vào {dayjs(item.created_at).format("HH:ss")} ngày{" "}
                {dayjs(item.created_at).format("DD/MM/YYYY")}
              </small>
            </div>
          );
        })}
      <Stack direction="horizontal" className="justify-content-end">
        <Button
          variant=""
          onClick={handleBack}
          className="me-2 border border-2 fw-bold"
        >
          {"<"}
        </Button>
        {Array.from({ length: pageNum }, (_, index) => (
          <Button
            variant=""
            key={index}
            className={clsx(
              "me-2 border border-2 fw-bold",
              curPage === index + 1 && "border-primary"
            )}
            onClick={() => setCurPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant=""
          className="border border-2 fw-bold"
          onClick={handleNext}
        >
          {">"}
        </Button>
      </Stack>
    </>
  );
}
