import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoMdAdd } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import SearchForm from "./SearchForm";

export default function Layout({ children }) {
  const btnStyle = "d-flex align-items-center gap-2";
  return (
    <>
      <div className="fixed-top">
        <Stack direction="horizontal" className="border py-2 pe-3 bg-white">
          <Button variant="" className={btnStyle + " ms-auto"}>
            <AiFillHeart className="text-danger" />
            <span className="fs-14 fw-500"> Yêu thích</span>
          </Button>
          <Button variant="" className={btnStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2.3999 21.6L2.40031 17.9996C2.40053 16.0115 4.01224 14.4 6.00031 14.4H11.9999M19.0285 13.5L21.5999 15.9M21.5999 15.9L19.0285 18.3M21.5999 15.9H14.9999M14.3999 6C14.3999 7.98822 12.7881 9.6 10.7999 9.6C8.81167 9.6 7.1999 7.98822 7.1999 6C7.1999 4.01177 8.81167 2.4 10.7999 2.4C12.7881 2.4 14.3999 4.01177 14.3999 6Z"
                stroke="#4BA558"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="fs-14 fw-500">Đăng nhập</span>
          </Button>
          <Button variant="" className={btnStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.6471 7.8V5.7C14.6471 5.14305 14.424 4.6089 14.0268 4.21508C13.6297 3.82125 13.091 3.6 12.5294 3.6H5.11765C4.55601 3.6 4.01738 3.82125 3.62024 4.21508C3.22311 4.6089 3 5.14305 3 5.7V18.3C3 18.857 3.22311 19.3911 3.62024 19.7849C4.01738 20.1787 4.55601 20.4 5.11765 20.4H12.5294C13.091 20.4 13.6297 20.1787 14.0268 19.7849C14.424 19.3911 14.6471 18.857 14.6471 18.3V16.2M8.29412 12H21M21 12L17.8235 8.85M21 12L17.8235 15.15"
                stroke="#4BA558"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="fs-14 fw-500">Đăng ký</span>
          </Button>
          <Button
            variant=""
            style={{ backgroundColor: "#E44A5D", color: "white" }}
            className={btnStyle}
          >
            <span className="fs-14 fw-500">
              <IoMdAdd /> Đăng tin mới
            </span>
          </Button>
        </Stack>
        <Navbar expand="sm" className="bg-dark" variant="dark">
          <Nav className="mx-auto fs-14 fw-700">
            <Nav.Link href="/" className="text-white">
              Trang chủ
            </Nav.Link>
            <Nav.Link href="/k1" className="text-white">
              Phòng trọ
            </Nav.Link>
            <Nav.Link href="/k2" className="text-white">
              Nhà nguyên căn
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Chung cư
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div
        className="d-flex flex-column align-items-center py-3"
        style={{ backgroundColor: "#EAFEF1", marginTop: "112px" }}
      >
        <div className="text-main-bolder fw-bold fs-30 fw-700">
          Tìm phòng trọ nhanh, phòng trọ mới nhất trên toàn quốc
        </div>
        <div className="fw-400">
          Hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng
        </div>
        <SearchForm />
      </div>
      {children}
    </>
  );
}
