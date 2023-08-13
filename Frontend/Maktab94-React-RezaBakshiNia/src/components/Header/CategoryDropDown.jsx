import { Link } from "react-router-dom";

const CategoryDropDown = () => {
  return (
    <div className="header_category-dropDown-container">
      <div className="category-dropDown-rightSide">
        <h3>یکم بگردیم...</h3>
        <img
          src="./src/assets/animated_laptop.gif"
          alt="animated_laptop"
        />
      </div>
      <div className="category-dropDown-leftSide">
        <div className="laptop-categories">
          <Link>
            <h4>لپتاپ</h4>
          </Link>
          <ul>
            <li>
              <Link>
                <span>ایسوس</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>دل</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>اچ پی</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>اپل</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="accessory-categories">
          <Link>
            <h4>لوازم جانبی</h4>
          </Link>
          <ul>
            <li>
              <Link>
                <span>موس</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>فن</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>شارژر</span>
              </Link>
            </li>
            <li>
              <Link>
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
