import { useState } from "react";
import DeliveryModal from "./DeliveryModal";
import { Tooltip } from "react-tippy";
import { formatNumberToCurrency } from "../../services/formatPrice";
import { convertADToJalali } from "../../services/dateConverter";

const AdminOrdersPage = () => {
  const newOrders = JSON.parse(localStorage.getItem("finalPurchase2"));
  const [arivedOrders, setArivedOrder] = useState(newOrders);
  const [DeliveryModalIsOpen, setDeliveryModalIsOpen] = useState(false);
  const [postedProduct, setPostedProduct] = useState(false);
  const [awaitingProduct, setAwaitingProduct] = useState(false);
  const [ID_ForModal, setID_ForModal] = useState(null);

  console.log(arivedOrders);

  // آخر کار از لوکال حذف کن آیتم های جدید رو
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
          {arivedOrders &&
            arivedOrders.map((item, index) => (
              <tr key={index}>
                <td data-label="نام کاربر">
                  {item.purchaseDetails.firstName +
                    " " +
                    item.purchaseDetails.lastName}
                </td>
                <td data-label="مجموع مبلغ">
                  {formatNumberToCurrency(item.orders[2].sumOfTotalPrices)}
                </td>
                <td data-label="زمان سفارش">
                  {convertADToJalali(item.purchaseDetails.deliveryDate)}
                </td>
                <td data-label="بررسی">
                  <Tooltip
                    title="بررسی سفارش"
                    position="top"
                    trigger="mouseenter"
                  >
                    <i
                      style={{ color: "seagreen", cursor: "pointer" }}
                      className="bi bi-card-checklist"
                      onClick={() => {
                        setID_ForModal(item.purchaseDetails.phoneNumber);
                        setDeliveryModalIsOpen(true);
                      }}
                    ></i>
                  </Tooltip>
                </td>
              </tr>
            ))}
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
      {DeliveryModalIsOpen && (
        <DeliveryModal
          closeDeliveryModal={setDeliveryModalIsOpen}
          ID_ForModal={ID_ForModal}
          orders={arivedOrders}
        />
      )}
    </div>
  );
};

export default AdminOrdersPage;
