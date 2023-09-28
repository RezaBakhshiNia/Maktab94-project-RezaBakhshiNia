import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tippy";
import { formatNumberToCurrency } from "../../services/formatPrice";
import Pagination from "../Admin/common/pagination";
import publicApiServices from "../../services/publicApi";
import Modal from "react-modal";
import DeleteModalContainer from "../Admin/common/DeleteModalContainer";
import { toast } from "react-toastify";
import EditModalContainer from "./EditModalContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartCount,
} from "../../reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [productDetailsForModal, setProductDetailsForModal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [triggerChanges, setTriggerChanges] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  const navigate = useNavigate();
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // دریافت دیتای سفارش‌ها
        const response = await publicApiServices.get("/api/orders");
        const orderData = response.data;
        console.log(orderData);
        setTotalPages(+response.data?.total_pages || null);
        const totalPriceSum = response.data.data.orders.reduce(
          (sum, order) => sum + order.totalPrice,
          0
        );
        console.log(response.data.data.orders);

        setTotalPrice(totalPriceSum);

        // دریافت دیتای محصولات
        const response_1 = await publicApiServices.get(
          "/api/products?page=0&limit=0&fields=-rating,-createdAt,-updatedAt,-__v&sort=price&name[gte]=8"
        );
        const productData = response_1.data.data;
        console.log(productData);

        // تطابق دادن آیدی محصولات در دیتای سفارش‌ها با آیدی محصولات در دیتای محصولات
        const newProductsArray = [];
        orderData.data.orders.forEach((order_1) => {
          order_1.products.forEach((orderProduct) => {
            const matchingProducts = productData.products.filter(
              (product) => product._id === orderProduct.product
            );

            matchingProducts.forEach((matchingProduct) => {
              const newObject = {
                thumbnail: matchingProduct.images[0],
                name: matchingProduct.name,
                orderQuantity: orderProduct.count,
                orderId: order_1._id,
                totalPrice: order_1.totalPrice,
                productId: matchingProduct._id,
                productQuantity: matchingProduct.quantity,
              };
              newProductsArray.push(newObject);
            });
          });
        });

        // ذخیره آرایه جدید در استیت
        setNewArray(newProductsArray);
      } catch (error) {
        console.log("خطا در دریافت دیتای سفارشات و محصولات:", error);
      }
    };

    fetchData();
  }, [triggerChanges]);

  // استفاده از آرایه جدید
  console.log(newArray);

  const handleDelete = async (id) => {
    try {
      const res = await publicApiServices.delete(
        `http://localhost:8000/api/orders/${id}`
      );
      console.log(res);
      dispatch(removeFromCart())
      triggerChanges === "deleted"
        ? setTriggerChanges("deleted2")
        : setTriggerChanges("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const finalizeThePurchase = () => {
    if (newArray.length === 0) {
      toast.warn("هیچ سفارشی وجود ندارد!");
      return 0;
    }
    const lastArrayOfData = { ...newArray, sumOfTotalPrices: totalPrice };
    localStorage.setItem("ordersInCart", JSON.stringify(lastArrayOfData));
    console.log(localStorage.getItem("ordersInCart"));

    navigate("/DeliveryForm");
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="cart-container">
      <h3>سبد خرید</h3>
      <table className="products-table rounded-table">
        <thead>
          <tr>
            <th scope="col">تصویر</th>
            <th scope="col">نام کالا</th>
            <th scope="col">قیمت</th>
            <th scope="col">تعداد</th>
            <th scope="col">اعمال تغییرات</th>
          </tr>
        </thead>
        <tbody>
          {newArray &&
            newArray.map((item, index) => (
              <tr key={index + 1}>
                <td data-label="تصویر">
                  <img
                    src={`http://localhost:8000/images/products/images/${item.thumbnail}`}
                    alt={item.slugname}
                    id="data-image"
                  />
                </td>
                <td data-label="نام کالا">{item.name}</td>
                <td data-label="قیمت">
                  {formatNumberToCurrency(item.totalPrice)}
                </td>
                <td data-label="تعداد">{item.orderQuantity}</td>
                <td className="action-icon" data-label="اعمال تغییرات">
                  <Tooltip
                    title="حذف سفارش"
                    position="top"
                    trigger="mouseenter"
                  >
                    <i
                      className="bi bi-trash3-fill"
                      onClick={() => {
                        setProductDetailsForModal({
                          name: item.name,
                          image: `http://localhost:8000/images/products/images/${item.thumbnail}`,
                          id: item.orderId,
                          productId: item.productId,
                        });
                        setModalIsOpen(true);
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    title="ویرایش تعداد سفارش"
                    position="top"
                    trigger="mouseenter"
                  >
                    <i
                      className="bi bi-wrench-adjustable"
                      onClick={() => {
                        setProductDetailsForModal({
                          name: item.name,
                          image: `http://localhost:8000/images/products/images/${item.thumbnail}`,
                          orderId: item.orderId,
                          productId: item.productId,
                          productQuantity: item.productQuantity,
                          orderQuantity: item.orderQuantity,
                        });
                        setEditModalIsOpen(true);
                      }}
                    />
                  </Tooltip>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <div className="total-basket-price">
          <span>جمع: </span>
          <span>{totalPrice && formatNumberToCurrency(totalPrice)}</span>
        </div>
        <button onClick={() => finalizeThePurchase()}>تکمیل خرید</button>
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        direction={"ltr"}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Delete Confirmation Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.195)",
          },
          content: {
            width: "40%",
            height: "max-content",
            margin: "auto",
            border: "1px solid #ccc",
            borderRadius: "9px",
            padding: "15px",
            textAlign: "center",
          },
        }}
      >
        <DeleteModalContainer
          productDetailsForModal={productDetailsForModal}
          setModalIsOpen={setModalIsOpen}
          handleDelete={handleDelete}
          setTriggerChanges={setTriggerChanges}
          triggerChanges={triggerChanges}
        />
      </Modal>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={() => setEditModalIsOpen(false)}
        contentLabel="Delete Confirmation Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.195)",
          },
          content: {
            width: "40%",
            height: "max-content",
            margin: "auto",
            border: "1px solid #ccc",
            borderRadius: "9px",
            padding: "15px",
            textAlign: "center",
          },
        }}
      >
        <EditModalContainer
          productDetailsForModal={productDetailsForModal}
          setModalIsOpen={setEditModalIsOpen}
          triggerChanges={triggerChanges}
          setTriggerChanges={setTriggerChanges}
        />
      </Modal>
    </div>
  );
};

export default Cart;
