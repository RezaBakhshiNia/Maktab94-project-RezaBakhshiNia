import { useState } from "react";
import DeliveryModal from "./DeliveryModal";

const AdminOrdersPage = () => {
  const [DeliveryModalIsOpen, setDeliveryModalIsOpen] = useState(false);
  return (
    <div className="AdminOrdersPage">
      <div className="AdminOrdersPage-head-title">
        <h3>مدیریت سفارش ها</h3>
        <div className="AdminOrdersPage-delivery-status">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              ارسال شده
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              در انتظار ارسال
            </label>
          </div>
        </div>
      </div>
      <table className="products-table rounded-table">
        <thead>
          <tr>
            <th scope="col">نام کاربر</th>
            <th scope="col">مجموع مبلغ</th>
            <th scope="col">زمان سفارش</th>
            <th scope="col">بررسی</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="نام کاربر">اکبر مردانی</td>
            <td data-label="مجموع مبلغ">
              <p>20,000,000</p>
            </td>
            <td data-label="زمان سفارش">1399/1/5</td>
            <td data-label="بررسی">بررسی سفارش</td>
          </tr>
          <tr>
            <td data-label="نام کاربر">اکبر مردانی</td>
            <td data-label="مجموع مبلغ">
              <p>20,000,000</p>
            </td>
            <td data-label="زمان سفارش">1399/1/5</td>
            <td data-label="بررسی">بررسی سفارش</td>
          </tr>
          <tr>
            <td data-label="نام کاربر">اکبر مردانی</td>
            <td data-label="مجموع مبلغ">
              <p>20,000,000</p>
            </td>
            <td data-label="زمان سفارش">1399/1/5</td>
            <td data-label="بررسی">بررسی سفارش</td>
          </tr>
          <tr>
            <td data-label="نام کاربر">اکبر مردانی</td>
            <td data-label="مجموع مبلغ">
              <p>20,000,000</p>
            </td>
            <td data-label="زمان سفارش">1399/1/5</td>
            <td data-label="بررسی">بررسی سفارش</td>
          </tr>
        </tbody>
      </table>
      <nav dir="ltr" aria-label="...">
        <ul className="pagination pagination-sm">
          <li className="page-item active" aria-current="page">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
      {/* <DeliveryModal /> */}
      {DeliveryModalIsOpen && <DeliveryModal />}
    </div>
  );
};

export default AdminOrdersPage;
