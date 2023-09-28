import { useState } from "react";
import publicApiServices from "../../services/publicApi";
import { toast } from "react-toastify";

const EditModalContainer = ({
  productDetailsForModal,
  setModalIsOpen,
  triggerChanges,
  setTriggerChanges,
}) => {
  const orderQuantity = productDetailsForModal.orderQuantity;
  const [quantity, setQuantity] = useState(orderQuantity);
  const handleOrderQuantity = (value) => {
    setQuantity(value);
  };
  console.log(quantity);
  const handleEdit = async () => {
    const url = `http://localhost:8000/api/orders/${productDetailsForModal.orderId}`;

    const updatedOrder = {
      user: localStorage.getItem("userLogedIn"),
      products: [
        {
          product: productDetailsForModal.productId,
          count:
            quantity >= orderQuantity && quantity <= 0
              ? +orderQuantity
              : +quantity,
        },
      ],
    };
    console.log(updatedOrder);

    publicApiServices
      .patch(url, updatedOrder)
      .then((response) => {
        console.log("Order updated:", response.data);
        toast.success("سفارش ویرایش شد.");
        setTriggerChanges(!triggerChanges);
      })
      .catch((error) => {
        console.log("Error updating order:", error);
        toast.error("سفارش ویرایش نشد.");
      });
  };
  const handleIncrease = () => {
    if (
      quantity < productDetailsForModal.productQuantity &&
      productDetailsForModal.productQuantity !== 0
    ) {
      setQuantity(quantity + 1);
    } else if (productDetailsForModal.productQuantity === 0) {
      setQuantity(0);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="deleteModalContainer">
      <h4>تایید ویرایش سفارش</h4>
      <img
        src={productDetailsForModal && productDetailsForModal.image}
        alt="modal-delete-image"
      />
      <p>
        از ویرایش سفارش {productDetailsForModal && productDetailsForModal.name}{" "}
        اطمینان دارید؟
      </p>
      <p>موجودی کل {productDetailsForModal.productQuantity} عدد می باشد.</p>
      <small></small>
      <div className="product-quantity">
        <span onClick={handleIncrease}>+</span>
        <b>{quantity}</b>
        <span onClick={handleDecrease}>-</span>
      </div>
      <button
        id="confrim-btn_delete-Modal"
        onClick={() => {
          handleEdit();
          setModalIsOpen(false);
        }}
      >
        ویرایش شود
      </button>
      <button
        id="cancel-btn_delete-Modal"
        onClick={() => setModalIsOpen(false)}
      >
        لغو
      </button>
    </div>
  );
};

export default EditModalContainer;
