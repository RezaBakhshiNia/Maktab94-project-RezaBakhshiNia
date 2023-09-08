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
              <span>دسته بندی</span>{" "}
              {dropDownCategoryIsOpen ? (
                <i className="bi bi-caret-down-fill"></i>
              ) : (
                <i className="bi bi-caret-down"></i>
              )}
            </span>
            {dropDownCategoryIsOpen && <CategoryDropDown />}
          </div>
          <div className="admin">
            <NavLink to="/admin-authentication">مدیریت</NavLink>
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
