export const sortTypes = [
  { name: "Mặc định", value: 0 },
  { name: "Tin mới nhất", value: 1 },
  { name: "Giá thấp đến cao", value: 2 },
  { name: "Giá cao đến thấp", value: 3 },
  { name: "Diện tích bé đến lớn", value: 4 },
  { name: "Diện tích lớn đến bé", value: 5 },
];
export const priceFilter = [
    {min: 0, max: 1 },
    {min: 1, max: 3},
    {min: 3, max: 5},
    {min: 5, max: 10},
    {min: 10, max: 40},
    {min: 40, max: 70},
    {min: 70, max: 100},
    {min: 100, max: 0},
]
export const areaFilter = [
    {min: 0, max: 30},
    {min: 30, max: 50},
    {min: 50, max: 80},
    {min: 80, max: 100},
    {min: 100, max: 150},
    {min: 150, max: 200},
    {min: 200, max: 250},
    {min: 250, max: 300},
    {min: 300, max: 500},
    {min: 500, max: 0},
]
export const apartFilter=[
  {name: 'Tất cả', value: 0},
  {name: 'Căn hộ chung cư', value: 1},
  {name: 'Nhà nguyên căn', value: 2},
  {name: 'Phòng trọ', value: 3},
]