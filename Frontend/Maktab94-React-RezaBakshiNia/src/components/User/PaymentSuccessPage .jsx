import { useLayoutEffect } from "react";
import publicApiServices from "../../services/publicApi";
import { useDispatch } from "react-redux";
import { clearCart } from "../../reducers/cartSlice";

const PaymentSuccessPage = () => {
  const dispatch = useDispatch();
  const generateIssueTracking = () => {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };
  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get("/api/orders");
        const orderIds = response.data.data.orders.map((order) => order._id);
        console.log(response.data.data.orders);
        const deleteAll = await Promise.all(
          orderIds.map(async (id) => {
            await publicApiServices.delete(
              `http://localhost:8000/api/orders/${id}`
            );
          })
        );
        console.log(deleteAll);
        dispatch(clearCart());
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div className="Payment-Success-Page">
      <div className="Payment-Success-Page-wrapper">
        <h2>پرداخت با موفقیت انجام شد</h2>
        <p> از خرید شما متشکریم.</p>
        <div className="issue-tracking">
          <p>شماره پیگیری:</p>
          <p>{generateIssueTracking()}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
