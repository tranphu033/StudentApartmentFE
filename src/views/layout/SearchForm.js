import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FilterSelector from "../../components/FilterSelector";
import { GrPowerReset } from "react-icons/gr";
import {
  IApartAll,
  IArea,
} from "../../common/icons";
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import ApartTypeFilterForm from "./ApartTypeFilterForm";
import PriceRangeMenu from "./PriceRangeMenu";
import AreaRangeMenu from "./AreaRangeMenu";

export default function SearchForm() {
  const [priceRange, setPriceRange] = useState({ min: -1, max: -1 });
  const [areaRange, setAreaRange] = useState({ min: -1, max: -1 });
  const [apartTypes, setApartTypes] = useState([]);
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");

  return (
    <Stack
      direction="horizontal"
      className="ps-4 mt-2 mb-3 mx-auto flex-wrap"
      gap="4"
    >
      <FilterSelector
        icon={<IApartAll />}
        defaultTitle={"Tất cả"}
        apartTypes={apartTypes}
        type="APARTTYPE"
      >
        <ApartTypeFilterForm
          apartTypes={apartTypes}
          setApartTypes={setApartTypes}
        />
      </FilterSelector>
      <FilterSelector
        icon={<CiLocationOn className="fs-5" />}
        defaultTitle={"Hà Nội"}
      >
        <Form
          id="locationFilter"
          className="px-3"
          style={{ minWidth: "260px" }}
        >
          {/* <FloatingLabel label="Tỉnh/Thành" className="my-2">
            <Form.Select aria-label="select province" size="sm">
              <option value="">Tất cả</option>
              <option value="">Hà Nội</option>              
            </Form.Select>
          </FloatingLabel> */}
          <FloatingLabel label="Quận/Huyện" className="my-2">
            <Form.Select aria-label="select district">
              <option value="">Tất cả</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel label="Phường/Xã" className="my-2">
            <Form.Select aria-label="select ward">
              <option value="">Tất cả</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel label="Đường/Phố" className="my-2">
            <Form.Select aria-label="select street">
              <option value="">Tất cả</option>
            </Form.Select>
          </FloatingLabel>
          <button type="reset" className="border-0 bg-white ps-1 py-1">
            <GrPowerReset /> Đặt lại
          </button>
        </Form>
      </FilterSelector>
      <FilterSelector
        icon={<IoPricetagOutline className="fs-5" />}
        defaultTitle={"Chọn giá"}
        priceRange={priceRange}
        type="PRICE"
      >
        <PriceRangeMenu setPriceRange={setPriceRange} />
      </FilterSelector>
      <FilterSelector
        icon={<IArea />}
        defaultTitle={"Chọn diện tích"}
        areaRange={areaRange}
        type="AREA"
      >
        <AreaRangeMenu setAreaRange={setAreaRange} />
      </FilterSelector>
      <button
        type="button"
        className="px-3 mb-1 border-0 rounded bg-main text-white"
        style={{ height: "44px" }}
      >
        Tìm kiếm
        <CiSearch className="ms-2 fs-5" />
      </button>
    </Stack>
  );
}
