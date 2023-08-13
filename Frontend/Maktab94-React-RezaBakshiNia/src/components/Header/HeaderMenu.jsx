import { NavLink } from "react-router-dom";
import CategoryDropDown from "./CategoryDropDown";
import { useState } from "react";

function HeaderMenu() {
  const [dropDownCategoryIsOpen, setDropDownCategoryIsOpen] = useState(false);
  return (
    <div id="header-menu" onMouseLeave={() => setDropDownCategoryIsOpen(false)}>
      <nav className="headerMenu-container">
        <div className="headerMenu-rightSide">
          <div className="category-wrapper">
            <span
              id="header_drop-down"
              onMouseEnter={() => setDropDownCategoryIsOpen(true)}
            >
              دسته بندی
            </span>
            {dropDownCategoryIsOpen && <CategoryDropDown/>}
          </div>
          <div className="admin">
            <NavLink to="/admin">مدیریت</NavLink>
          </div>
          <div className="about">
            <NavLink to="/about">درباره ما</NavLink>
          </div>
          <div className="contact">
            <NavLink to="/contact">راه ارتباطی</NavLink>
          </div>
          <div className="home">
            <NavLink to="/">صفحه اصلی</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderMenu;
