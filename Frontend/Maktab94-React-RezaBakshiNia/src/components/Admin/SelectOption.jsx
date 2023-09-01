import { useState } from "react";

const SelectOption = ({
  handleCategoryChange,
  handleSubCategoryChange,
  productCategory,
  productSubCategory,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [laptopBrand, setLaptopBrand] = useState("");

  const handleOptionChange = (event) => {
    handleCategoryChange(event.target.value);
    handleSubCategoryChange("");
  };

  const handleBrandChange = (event) => {
    handleSubCategoryChange(event.target.value);
  };

  return (
    <div className="AddProduct-SelectOption">
      <select value={productCategory} onChange={handleOptionChange}>
        <option selected disabled>
          لطفاً نوع محصول را انتخاب کنید
        </option>
        <option value="laptop">لپ تاپ</option>
        <option value="accessories">لوازم جانبی</option>
      </select>

      {productCategory === "laptop" && (
        <select value={laptopBrand} onChange={handleBrandChange}>
          <option selected disabled>
            لطفاً برند لپ تاپ را انتخاب کنید
          </option>
          <option value="asus">ایسوس</option>
          <option value="dell">دل</option>
          <option value="hp">اچ پی</option>
          <option value="apple">اپل</option>
        </select>
      )}

      {productCategory === "accessories" && (
        <select onChange={handleBrandChange}>
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
