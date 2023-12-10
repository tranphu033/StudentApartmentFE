import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FilterSelector from "../../components/FilterSelector";
import { apartFilter, areaFilter, priceFilter } from "../../constants";
import { GrPowerReset } from "react-icons/gr";
import {
  IApart1,
  IApart2,
  IApart3,
  IApartAll,
  IArea,
} from "../../common/icons";
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import clsx from "clsx";

export default function SearchForm() {
  return (
    <Stack
      direction="horizontal"
      className="ps-4 mt-2 mb-3 mx-auto flex-wrap"
      gap="4"
    >
      <FilterSelector icon={<IApartAll />} curText={"Tất cả"}>
        <Form id="apartFilter" style={{minWidth: '230px'}}>
          {apartFilter?.map((item, index) => (
            <div className="px-3 py-1" key={index}>
              <div className="d-inline-flex gap-1">
                {item.value === 0 && <IApartAll />}
                {item.value === 1 && <IApart1 />}
                {item.value === 2 && <IApart2 />}
                {item.value === 3 && <IApart3 />}
                <span className="">{item.name}</span>
              </div>
              <Form.Check
                type="checkbox"
                reverse
                aria-label={item.name}
                className="float-end"
              />
            </div>
          ))}
          <button
            type="reset"
            className="border-0 w-100 bg-white text-start ps-3 py-1 "
          >
            <GrPowerReset /> Đặt lại
          </button>
        </Form>
      </FilterSelector>
      <FilterSelector
        icon={<CiLocationOn className="fs-5" />}
        curText={"Hà Nội"}        
      >
        <Form id="locationFilter" className="px-3" style={{minWidth: '260px'}}>
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
        curText={"Chọn giá"}
      >
        <div id="priceFilter">
          <div className="ps-3 py-1 border-bottom cursor-pointer">
            Tất cả mức giá
          </div>
          {priceFilter?.map((item, index) => (
            <div
              className={clsx(
                "ps-3 py-1 cursor-pointer",
                index < priceFilter.length - 1 && "border-bottom"
              )}
              key={index}
            >
              {item.min === 0 && <span>Dưới {item.max}</span>}
              {item.max === 0 && <span>Trên {item.min}</span>}
              {item.min !== 0 && item.max !== 0 ? (
                <span>
                  {item.min} - {item.max}
                </span>
              ) : null}
              {" triệu"}
            </div>
          ))}
        </div>
      </FilterSelector>
      <FilterSelector icon={<IArea />} curText={"Chọn diện tích"}>
        <div id="areaFilter">
          <div className="ps-3 py-1 border-bottom cursor-pointer">
            Tất cả diện tích
          </div>
          {areaFilter?.map((item, index) => (
            <div
              className={clsx(
                "ps-3 py-1 cursor-pointer",
                index < areaFilter.length - 1 && "border-bottom"
              )}
              key={index}
            >
              {item.min === 0 && <span>Dưới {item.max}</span>}
              {item.max === 0 && <span>Trên {item.min}</span>}
              {item.min !== 0 && item.max !== 0 ? (
                <span>
                  {item.min} - {item.max}
                </span>
              ) : null}
              {" triệu"}
            </div>
          ))}
        </div>
      </FilterSelector>
      <button
        type="button"
        className="px-3 mb-1 border-0 rounded bg-main text-white"
        style={{height: '44px'}}
      >
        Tìm kiếm
        <CiSearch className="ms-2 fs-5" />
      </button>
    </Stack>
  );
}
