import Badge from "react-bootstrap/Badge";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";

export default function FilterSelector({
  children,
  icon,
  defaultTitle,
  apartTypes,
  priceRange,
  areaRange,
  type,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="position-relative" onMouseLeave={() => setShow(false)}>
      <div
        className="d-inline-flex border-main rounded bg-white py-2 px-2"
        style={{ minWidth: "240px" }}
      >
        <div className="d-inline-flex align-items-center gap-2">
          {icon || ""}
          {/* price filter case */}
          {type === "PRICE" && priceRange.min < 0 ? defaultTitle : null}
          {type === "PRICE" && priceRange.min >= 0 ? (
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
          ) : null}
          {/* area filter case */}
          {type === "AREA" && areaRange.min < 0 ? defaultTitle : null}
          {type === "AREA" && areaRange.min >= 0 ? (
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
          ) : null}
          {/* apartment type filter case */}
          {type === "APARTTYPE" && apartTypes.length > 0 ? (
            <div className="">
              {apartTypes[0].name}
              {apartTypes[0].value > 0 && (
                // <span className="ms-2 me-1 text-sm rounded-pill text-white bg-main-bolder px-1">
                //   {apartTypes.length}
                // </span>
                <Badge pill bg="success" className="mx-1">{apartTypes.length}</Badge>
              )}
            </div>
          ) : null}
        </div>
        <button
          type="button"
          className="border-0 rounded bg-light ms-auto text-main "
          onClick={() => setShow(true)}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <div className="mt-1"></div>
      <div
        className={clsx(
          "position-absolute end-0 top-100 shadow bg-white py-1",
          !show && "visually-hidden"
        )}
        style={{ minWidth: "200px", zIndex: 2 }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
