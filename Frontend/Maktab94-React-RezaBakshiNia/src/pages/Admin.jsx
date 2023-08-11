import { Outlet, Link } from "react-router-dom";
function Admin() {
  return (
    <div>
      <h1>صفحه ادمین</h1>
      <div>
        <Link to={'http://localhost:5173/admin/products'}>کالا ها</Link>
        <Link to={'http://localhost:5173/admin/inventory-prices'}>موجودی ها و قیمت</Link>
        <Link to={'http://localhost:5173/admin/orders'}>سفارش ها</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Admin;
