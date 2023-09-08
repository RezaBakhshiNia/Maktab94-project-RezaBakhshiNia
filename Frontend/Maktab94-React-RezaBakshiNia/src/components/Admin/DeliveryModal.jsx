import { useState } from "react";
import { convertADToJalali } from "../../services/dateConverter";
import { formatNumberToCurrency } from "../../services/formatPrice";
import { Link } from "react-router-dom";

const DeliveryModal = ({ closeDeliveryModal, orders, ID_ForModal }) => {
  const [order, setOrder] = useState(
    orders.find((item) => item.purchaseDetails.phoneNumber === ID_ForModal)
  );
  console.log(order);
const handleSendOrder = ()=> {
  
}
  return (
    <div id="DeliveryModal">
      <div className="DeliveryModal_head-title">
        <p>نمایش سفارش</p>
        <i
          className="bi bi-x-circle-fill"
          onClick={() => closeDeliveryModal(false)}
        />
      </div>
      <div className="Delivery_info">
        <div className="Delivery_customer-address">
          <span>نام مشتری:</span>{" "}
          <span>
            {order.purchaseDetails.firstName +
              " " +
              order.purchaseDetails.lastName}
          </span>
        </div>
        <div className="">
          <span>آدرس:</span> <span>{order.purchaseDetails.address}</span>
        </div>
        <div className="">
          <span>تلفن:</span> <span>{order.purchaseDetails.phoneNumber}</span>
        </div>
        <div className="">
          <span>زمان تحویل:</span>{" "}
          <span>
            {order.purchaseDetails.postedDate
              ? order.purchaseDetails.postedDate
              : "مشخص نشده!"}
          </span>
        </div>
        <div className="">
          <span>زمان سفارش:</span>{" "}
          <span>{convertADToJalali(order.purchaseDetails.deliveryDate)}</span>
        </div>
      </div>
      <div
        className="Delivery_table-info"
        style={{ overflowY: "auto", height: "10em" }}
      >
        <table className="products-table rounded-table">
          <thead>
            <tr>
              <th scope="col">کالا</th>
              <th scope="col">قیمت</th>
              <th scope="col">تعداد</th>
            </tr>
          </thead>
          <tbody>
            {order.orders.map((item, index) =>
              index === order.orders.lengeth - 1 ? (
                <tr key={index}>
                  <td data-label="کالا">کل کالا ها</td>
                  <td data-label="قیمت">
                    {formatNumberToCurrency(`${item.sumOfTotalPrices}`)}
                  </td>
                  <td data-label="تعداد">{order.orders.lengeth - 1}</td>
                </tr>
              ) : (
                <tr key={index}>
                  <td data-label="کالا">
                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                  </td>
                  <td data-label="قیمت">
                    {formatNumberToCurrency(`${item.totalPrice}`)}
                  </td>
                  <td data-label="تعداد">{item.orderQuantity}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {order.purchaseDetails.postedDate ? (
        <p>{convertADToJalali(order.orders.purchaseDetails.postedDate)}</p>
      ) : (
        <button className="Add-new-product" onClick={handleSendOrder}>ارسال</button>
      )}
    </div>
  );
};

export default DeliveryModal;
