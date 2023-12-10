import { areaFilter, priceFilter } from "../../constants";

export default function RightFilter() {
  return (
    <div>
      <div
        className="border-main rounded"
        style={{ marginTop: "79px", zIndex: 1 }}
      >
        <div className="mt-1 ms-3 mb-1 fw-bold" style={{ fontSize: "18px" }}>
          Lọc theo khoảng giá
        </div>
        {priceFilter?.map((item, index) => (
          <div
            key={index}
            className="text-start ps-3 py-1 cursor-pointer"            
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
      <div className="border-main rounded mt-4">
        <div className="mt-1 ms-3 mb-1 fw-bold" style={{ fontSize: "18px" }}>
          Lọc theo diện tích
        </div>
        {areaFilter?.map((item, index) => (
          <div
            key={index}
            className="text-start ps-3 py-1 cursor-pointer"            
          >
            {item.min === 0 && <span>Dưới {item.max}</span>}
            {item.max === 0 && <span>Trên {item.min}</span>}
            {item.min !== 0 && item.max !== 0 ? (
              <span>
                {item.min} - {item.max}
              </span>
            ) : null}
            {" m"}
            {<sup>2</sup>}
          </div>
        ))}
      </div>
    </div>
  );
}
