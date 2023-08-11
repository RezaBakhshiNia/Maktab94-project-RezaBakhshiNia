import { NavLink } from "react-router-dom";

function HeaderMenu() {
  return (
    <div id="header-menu">
      <div className="headerMenu-container">
        <div className="headerMenu-rightSide">
          <div className="category-wrapper">
            <span>دسته بندی</span>
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
        <div className="headerMenu-leftSide"></div>
      </div>
    </div>
  );
}

export default HeaderMenu;
