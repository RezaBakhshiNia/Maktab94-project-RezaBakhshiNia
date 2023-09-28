import { useEffect, useState } from "react";
import { convertADToJalali } from "../../services/dateConverter";
import { formatNumberToCurrency } from "../../services/formatPrice";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeliveryModal = ({
  closeDeliveryModal,
  ID_ForModal,
  isDdelivered,
  setIsDdelivered,
  triggerChanges,
  setTriggerChanges,
}) => {
  const [data, setData] = useState(null);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    console.log(isDdelivered);

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://65029f6da0f2c1f3faea9ffa.mockapi.io/orders/${
            isDdelivered ? "delivered" : "cart"
          }/${ID_ForModal}`
        );
        setData(response.data);
        console.log(response.data);
        console.log(response.data.order);
        const order = response.data.order;
        const numericProperties = [];
        for (const key in response.data.order) {
          if (!isNaN(key)) {
            numericProperties.push(
              <tr key={key}>
                <td data-label="کالا">
                  <Link to={`/product/${order[key].productId}`}>
                    {order[key].name}
                  </Link>
                </td>
                <td data-label="قیمت">
                  {formatNumberToCurrency(`${order[key].totalPrice}`)}
                </td>
                <td data-label="تعداد">{order[key].orderQuantity}</td>
              </tr>
            );
          }
          setTableData(numericProperties);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [ID_ForModal, isDdelivered]);

  const handleSendOrder = async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns 0-based months
    const day = currentDate.getDate();

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate); // Output: 2023-2-3
    const deleiverdOrder = { ...data, postedDate: formattedDate };
    console.log(deleiverdOrder);
    try {
      const res = await axios.post(
        "https://65029f6da0f2c1f3faea9ffa.mockapi.io/orders/delivered",
        deleiverdOrder
      );
      const deleteResponse = await axios.delete(
        `https://65029f6da0f2c1f3faea9ffa.mockapi.io/orders/cart/${data.id}`
      );
      console.log("Object posted:", res.data);
      console.log("Object deleted:", deleteResponse.data);
      toast.success("سفارش ارسال شد.");
      setTriggerChanges(!triggerChanges);
      closeDeliveryModal(false);
    } catch (error) {
      toast.error("خطا در ارسال سفارش.");
      throw new Error(error);
    }
  };
  return (
    <div id="DeliveryModal">
      <div className="DeliveryModal_head-title">
        <p>نمایش سفارش</p>
        <i
          className="bi bi-x-circle-fill"
          onClick={() => {
            setIsDdelivered(false);
            closeDeliveryModal(false);
          }}
        />
      </div>
      <div className="Delivery_info">
        <div className="Delivery_customer-address">
          <span>نام مشتری:</span>{" "}
          <span>
            {data?.purchaseDetails.firstName +
              " " +
              data?.purchaseDetails.lastName}
          </span>
        </div>
        <div className="">
          <span>آدرس:</span> <span>{data?.purchaseDetails.address}</span>
        </div>
        <div className="">
          <span>تلفن:</span> <span>{data?.purchaseDetails.phoneNumber}</span>
        </div>
        <div className="">
          <span>زمان تحویل:</span>{" "}
          <span>
            {data?.postedDate
              ? convertADToJalali(data?.postedDate)
              : "مشخص نشده!"}
          </span>
        </div>
        <div className="">
          <span>زمان سفارش:</span>{" "}
          <span>{convertADToJalali(data?.purchaseDetails.deliveryDate)}</span>
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
          <tbody>{tableData}</tbody>
        </table>
      </div>
      {data?.postedDate ? (
        <p>{convertADToJalali(data.postedDate)}</p>
      ) : (
        <button className="Add-new-product" onClick={handleSendOrder}>
          تحویل دادن
        </button>
      )}
    </div>
  );
};

export default DeliveryModal;
