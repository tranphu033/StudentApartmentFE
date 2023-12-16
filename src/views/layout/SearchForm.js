import Stack from "react-bootstrap/Stack";
import FilterSelector from "../../components/FilterSelector";
import { GrPowerReset } from "react-icons/gr";
import { IApartAll, IArea } from "../../common/icons";
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import ApartTypeFilterForm from "./ApartTypeFilterForm";
import PriceRangeMenu from "./PriceRangeMenu";
import AreaRangeMenu from "./AreaRangeMenu";
import { apartFilter, locationList } from "../../constants";
import Badge from "react-bootstrap/Badge";
import LocationSelect from "../../components/LocationSelect";

export default function SearchForm({ getListPost, setSortType, setCurPage }) {
  const [priceRange, setPriceRange] = useState({ min: -1, max: -1 });
  const [areaRange, setAreaRange] = useState({ min: -1, max: -1 });
  const [apartTypes, setApartTypes] = useState([]);
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [curWardList, setCurWardList] = useState([]);
  const [street, setStreet] = useState("");
  const [curStreetList, setCurStreetList] = useState([]);

  const CurrentPriceRange = () => {
    if (priceRange.min < 0) return <span>Chọn giá</span>;
    if (priceRange.min >= 0)
      return (
        <span>
          {priceRange.min === 0 && priceRange.max === 0 ? (
            "Tất cả mức giá"
          ) : (
            <span>
              {priceRange.min === 0 && <span>Dưới {priceRange.max}</span>}
              {priceRange.max === 0 && <span>Trên {priceRange.min}</span>}
              {priceRange.min !== 0 && priceRange.max !== 0 ? (
                <span>
                  {priceRange.min} - {priceRange.max}
                </span>
              ) : null}
              {" triệu"}
            </span>
          )}
        </span>
      );
  };
  const CurrentAreaRange = () => {
    if (areaRange.min < 0) return <span>Chọn diện tích</span>;
    if (areaRange.min >= 0)
      return (
        <span>
          {areaRange.min === 0 && areaRange.max === 0 ? (
            "Tất cả diện tích"
          ) : (
            <span>
              {areaRange.min === 0 && <span>Dưới {areaRange.max}</span>}
              {areaRange.max === 0 && <span>Trên {areaRange.min}</span>}
              {areaRange.min !== 0 && areaRange.max !== 0 ? (
                <span>
                  {areaRange.min} - {areaRange.max}
                </span>
              ) : null}
              {" m"}
              {<sup>2</sup>}
            </span>
          )}
        </span>
      );
  };
  const CurrentApartType = () => {
    const total = apartFilter.length;
    const selectedLen = apartTypes.length;
    if (selectedLen === 0) return <span>Chọn loại nhà trọ</span>;
    else if (selectedLen === total) return <span>Tất cả loại nhà trọ</span>;
    else
      return (
        <div>
          {apartTypes[0].name}
          {selectedLen > 1 && (
            <Badge bg="success" className="ms-2 me-1">
              {selectedLen}
            </Badge>
          )}
        </div>
      );
  };
  const handleSearch = async () => {
    setSortType(0);
    setCurPage(1);
    // console.log("price range::", priceRange);
    // console.log("area range::", areaRange);
    // console.log(
    //   "apartment types::",
    //   apartTypes.map((item) => {
    //     return item.value;
    //   })
    // );
    // console.log("location::", street + ", " + ward + ", " + district);

    let filterCondition = {};
    if (apartTypes.length > 0) {
      filterCondition.type = apartTypes.map((item) => {
        return item.value;
      });
    }
    if (priceRange.min > 0 || priceRange.max > 0) {
      if (priceRange.min > 0)
        filterCondition.priceMin = priceRange.min * 1000000;
      if (priceRange.max > 0)
        filterCondition.priceMax = priceRange.max * 1000000;
    }
    if (areaRange.min > 0 || areaRange.max > 0) {
      if (areaRange.min > 0)
        filterCondition.areaMin = areaRange.min;
      if (areaRange.max > 0)
        filterCondition.areaMax = areaRange.max;
    }
    if (district) filterCondition.district = district;
    if (ward) filterCondition.ward = ward;
    if (street) filterCondition.street = street;
    console.log("filter condition::", filterCondition);
    localStorage.setItem("filterCondition", JSON.stringify(filterCondition));
    //send request to server
    await getListPost(filterCondition);
  };

  useEffect(() => {
    if (!district) {
      setWard("");
      setStreet("");
    }
    let wardList = locationList
      .find((item) => item.district === district)
      ?.ward.map((item) => {
        return item.name;
      });
    setCurWardList(wardList);
  }, [district]);
  useEffect(() => {
    if (!ward) {
      setStreet("");
    }
    let streetList = locationList
      .find((item) => item.district === district)
      ?.ward.find((item) => item.name === ward)?.street;
    setCurStreetList(streetList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ward]);

  return (
    <Stack
      direction="horizontal"
      className="ps-4 mt-2 mb-3 mx-auto flex-wrap"
      gap="4"
    >
      <FilterSelector icon={<IApartAll />} current={<CurrentApartType />}>
        <ApartTypeFilterForm
          apartTypes={apartTypes}
          setApartTypes={setApartTypes}
        />
      </FilterSelector>
      <FilterSelector
        icon={<CiLocationOn className="fs-5" />}
        current={"Hà Nội"}
      >
        <div className="p-3" style={{ minWidth: "280px" }}>
          <LocationSelect
            defaultText="Tỉnh/Thành"
            item={"Hà Nội"}
            disabled={true}
          />
          <LocationSelect
            className="mt-2"
            defaultText="Quận/Huyện"
            itemList={locationList.map((item) => {
              return item.district;
            })}
            item={district}
            setItem={setDistrict}
          />
          <LocationSelect
            className="mt-2"
            defaultText="Phường/Xã"
            itemList={curWardList}
            item={ward}
            setItem={setWard}
            disabled={!district}
            message={"Vui lòng chọn Quận/Huyện"}
          />
          <LocationSelect
            className="mt-2"
            defaultText="Đường/Phố"
            itemList={curStreetList}
            item={street}
            setItem={setStreet}
            disabled={!ward}
            message={"Vui lòng chọn Phường/Xã"}
          />
        </div>
        <span
          className="d-inline-block ms-3 mb-2 cursor-pointer text-hover-main"
          onClick={() => setDistrict("")}
        >
          <GrPowerReset /> Đặt lại
        </span>
      </FilterSelector>
      <FilterSelector
        icon={<IoPricetagOutline className="fs-5" />}
        current={<CurrentPriceRange />}
      >
        <PriceRangeMenu setPriceRange={setPriceRange} />
      </FilterSelector>
      <FilterSelector icon={<IArea />} current={<CurrentAreaRange />}>
        <AreaRangeMenu setAreaRange={setAreaRange} />
      </FilterSelector>
      <button
        type="button"
        className="px-3 mb-1 border-0 rounded bg-main text-white fs-14 fw-600"
        style={{ height: "44px" }}
        onClick={handleSearch}
      >
        Tìm kiếm
        <CiSearch className="ms-1 fs-4" />
      </button>
    </Stack>
  );
}
