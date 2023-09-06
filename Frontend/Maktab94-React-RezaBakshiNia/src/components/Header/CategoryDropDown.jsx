import { Link } from "react-router-dom";

const CategoryDropDown = () => {
  return (
    <div className="header_category-dropDown-container">
      <div className="category-dropDown-rightSide">
        <h3>یکم بگردیم...</h3>
        <img
          src="/assets/animated_laptop.gif"
          alt="animated_laptop"
        />
      </div>
      <div className="category-dropDown-leftSide">
        <div className="laptop-categories">
          <Link to={'category/laptop'}>
            <h4>لپتاپ</h4>
          </Link>
          <ul>
            <li>
              <Link to={'category/laptop/asus'}>
                <span>ایسوس</span>
              </Link>
            </li>
            <li>
              <Link to={'category/laptop/dell'}>
                <span>دل</span>
              </Link>
            </li>
            <li>
              <Link to={'category/laptop/hp'}>
                <span>اچ پی</span>
              </Link>
            </li>
            <li>
              <Link to={'category/laptop/apple'}>
                <span>اپل</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="accessory-categories">
          <Link to={'category/accessory'}>
            <h4>لوازم جانبی</h4>
          </Link>
          <ul>
            <li>
              <Link to={'category/accessory/mouse'}>
                <span>موس</span>
              </Link>
            </li>
            <li>
              <Link to={'category/accessory/fan'}>
                <span>فن</span>
              </Link>
            </li>
            <li>
              <Link to={'category/accessory/charger'}>
                <span>شارژر</span>
              </Link>
            </li>
            <li>
              <Link to={'category/accessory/ram'}>
                <span>رم</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropDown;
