import { useState } from "react";

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [laptopBrand, setLaptopBrand] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setLaptopBrand("");
  };

  const handleBrandChange = (event) => {
    setLaptopBrand(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">لطفاً نوع محصول را انتخاب کنید</option>
        <option value="laptop">لپ تاپ</option>
        <option value="accessories">لوازم جانبی</option>
      </select>

      {selectedOption === "laptop" && (
        <select value={laptopBrand} onChange={handleBrandChange}>
          <option value="">لطفاً برند لپ تاپ را انتخاب کنید</option>
          <option value="asus">ایسوس</option>
          <option value="dell">دل</option>
          <option value="hp">اچ پی</option>
          <option value="apple">اپل</option>
        </select>
      )}

      {selectedOption === "accessories" && (
        <select>
          <option value="">لطفاً نوع لوازم جانبی را انتخاب کنید</option>
          <option value="mouse">موس</option>
          <option value="fan">فن</option>
          <option value="charger">شارژر</option>
          <option value="ram">رم</option>
        </select>
      )}
    </div>
  );
};

export default SelectOption;
