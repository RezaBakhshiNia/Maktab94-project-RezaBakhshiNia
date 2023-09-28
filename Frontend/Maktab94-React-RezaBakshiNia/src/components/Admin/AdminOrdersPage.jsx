import { useEffect, useState } from "react";
import DeliveryModal from "./DeliveryModal";
import { Tooltip } from "react-tippy";
import { formatNumberToCurrency } from "../../services/formatPrice";
import { convertADToJalali } from "../../services/dateConverter";
import axios from "axios";

const AdminOrdersPage = () => {
  const [DeliveryModalIsOpen, setDeliveryModalIsOpen] = useState(false);
  const [isDdelivered, setIsDdelivered] = useState(false);
  const [productsStatus, setProductsStatus] = useState("waiting");
  const [ID_ForModal, setID_ForModal] = useState(null);
  const [data, setData] = useState([]);
  const [triggerChanges, setTriggerChanges] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(productsStatus);

        if (productsStatus === "waiting") {
          const response = await axios.get(
            "https://65029f6da0f2c1f3faea9ffa.mockapi.io/orders/cart"
          );
          setData(response.data);
          console.log(response.data);
        } else {
          const response = await axios.get(
            "https://65029f6da0f2c1f3faea9ffa.mockapi.io/orders/delivered"
          );
          setData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [productsStatus, triggerChanges]);

  return (
    <div className="AdminOrdersPage">
      <div className="AdminOrdersPage-head-title">
        <h3>مدیریت سفارش ها</h3>
        <div className="AdminOrdersPage-delivery-status">
          <div className="check-wrapper">
            <span
              className={`span-check ${
                productsStatus !== "waiting" ? "checked" : ""
              }`}
              onClick={() => setProductsStatus("delivered")}
              value={productsStatus}
              id="flexRadioDefault1"
            />
            <label className="check-label" htmlFor="flexRadioDefault1">
              ارسال شده
            </label>
          </div>
          <div className="check-wrapper">
            <span
              className={`span-check ${
                productsStatus === "waiting" ? "checked" : ""
              }`}
              onClick={() => setProductsStatus("waiting")}
              value={productsStatus}
              id="flexRadioDefault2"
            />
            <label className="check-label" htmlFor="flexRadioDefault2">
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
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td data-label="نام کاربر">
                  {item.purchaseDetails.firstName +
                    " " +
                    item.purchaseDetails.lastName}
                </td>
                <td data-label="مجموع مبلغ">
                  {formatNumberToCurrency(item.order.sumOfTotalPrices)}
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
                        setID_ForModal(item.id);
                        productsStatus === "delivered"
                          ? setIsDdelivered(true)
                          : null;
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
          isDdelivered={isDdelivered}
          setIsDdelivered={setIsDdelivered}
          triggerChanges={triggerChanges}
          setTriggerChanges={setTriggerChanges}
        />
      )}
    </div>
  );
};

export default AdminOrdersPage;
