import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="topHeadr">
      <div className="logoAndName">
        <Link to={"http://localhost:5173"}>
          <img
            id="imgLogo"
            src="https://th.bing.com/th/id/OIG.LQzTzZLkqUd5tIfvCIxB?pid=ImgGn"
            alt="logo"
          />
          <h1>لپتاپیا</h1>
        </Link>
      </div>
      <div className="header_search-bar">
        <input
          id="search-field"
          type="text"
          autoComplete="off"
          maxLength="100"
          placeholder="جستجو..."
        />
        <i className="bi bi-search"></i>
      </div>
      <div className="user-pages">
        <Link className="profile-page" to="http://localhost:5173/userProfile/profile">
          <i className="bi bi-person"></i>
          <span>پروفایل</span>
        </Link>
        <Link className="cart-page" to="http://localhost:5173/userProfile/cart">
          <i className="bi bi-cart3"></i>
          <span>سبد خرید</span>
          <small>0</small>
        </Link>
        <Link className="comparison-page" to="http://localhost:5173/comparison">
          <i className="bi bi-shuffle"></i>
          <span>مقایسه</span>
          <small>0</small>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
