import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";

const AdminSideBarMenu = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar_menu-title">داشبورد</h3>
      <nav className="navigations-links">
        <Link to={"http://localhost:5173/admin"}>
          <Tooltip title="صفحه اصلی" position="top" trigger="mouseenter">
            <i className="bi bi-house-door-fill" />{" "}
          </Tooltip>
        </Link>

        <Link to={"http://localhost:5173/admin/products"}>
          <Tooltip title="کالا ها" position="top" trigger="mouseenter">
            <i className="bi bi-box-seam" />
          </Tooltip>
        </Link>
        <Link to={"http://localhost:5173/admin/inventory-prices"}>
          <Tooltip title="موجودی و قیمت" position="top" trigger="mouseenter">
            <i className="bi bi-receipt" />
          </Tooltip>
        </Link>
        <Link to={"http://localhost:5173/admin/orders"}>
          <Tooltip title="سفارشات" position="top" trigger="mouseenter">
            <i className="bi bi-list-ol" />
          </Tooltip>
        </Link>
        <Tooltip
          title="برای خروج از پنل دو بار کلیک کنید."
          position="top"
          trigger="mouseenter"
        >
          <i className="bi bi-power"></i>
        </Tooltip>
      </nav>
    </div>
  );
};

export default AdminSideBarMenu;
