import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="categories-container">
      <div className="categories-rightSide">
        <h2>لپتاپیا</h2>
        <img src="" alt="" />
      </div>
      <div className="categories-leftSide">
        <ul>
          <li>
            <h3>
              <Link to="/laptop">لپتاپ ها</Link>
            </h3>
            <Link to="/laptop/asus">ایسوس</Link>
            <Link to="/laptop/lenovo">لنوو</Link>
            <Link to="/laptop/hp">اچ پی</Link>
          </li>
          <li>
            <h3>
              <Link to="/laptop">لوازم جانبی لپ تاپ</Link>
            </h3>
            <Link to="/laptop/fan">فن لپ تاپ</Link>
            <Link to="/laptop/ram">رم لپ تاپ</Link>
            <Link to="/laptop/hhd">هارد لپ تاپ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
