import Form from "react-bootstrap/Form";
import { apartFilter } from "../../constants";
import { IApart1, IApart2, IApart3, IApartAll } from "../../common/icons";
import { GrPowerReset } from "react-icons/gr";

export default function ApartTypeFilterForm({apartTypes, setApartTypes}) {
  const handleSelect = (item) => {
    console.log('name::', item.name);
    let types_cp = [...apartTypes];
    let index = apartTypes.indexOf(item);
    if (index < 0) {
      types_cp.push(item);
    } else {
      types_cp.splice(index, 1);
    }
    console.log('type list::', types_cp);
    setApartTypes(types_cp);
  };

  return (
    <Form style={{ minWidth: "230px" }}>
      {apartFilter?.map((item, index) => (
        <div className="px-3 py-1" key={index}>
          <div className="d-inline-flex gap-1">
            {item.value === 0 && <IApartAll />}
            {item.value === 1 && <IApart1 />}
            {item.value === 2 && <IApart2 />}
            {item.value === 3 && <IApart3 />}
            <span>{item.name}</span>
          </div>
          <Form.Check
            type="checkbox"
            reverse
            aria-label={item.name}
            className="float-end"            
            onClick={() => handleSelect(item)}
          />
        </div>
      ))}
      <button
        type="reset"
        className="border-0 w-100 bg-white text-start ps-3 py-1"
        onClick={() => setApartTypes([])}
      >
        <GrPowerReset /> Đặt lại
      </button>
    </Form>
  );
}
