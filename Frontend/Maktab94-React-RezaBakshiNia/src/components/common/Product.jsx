import { useEffect, useState, useLayoutEffect } from "react";
import publicApiServices from "../../services/publicApi";
import { Link, useNavigate } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import ProductDescription from "./ProductDescription";
import "./productPage.scss";
import { formatNumberToCurrency } from "../../services/formatPrice";
import { toast } from "react-toastify";

const Product = () => {
  const productID = `${window.location.href}`;
  console.log(productID.split("/")[4]);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const user = localStorage.getItem("userLogedIn");
  const navigate = useNavigate();
  const deliveryStatus = false;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get(
          `http://localhost:8000/api/products/${productID.split("/")[4]}`
        );
        setProduct(response.data.data.product);
        console.log(response.data.data.product);
        if (response.data.data.product.quantity === 0) {
          setQuantity(0);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCreateOrder = async () => {
    try {
      if (user === null) {
        navigate("/userProfile/auth");
        toast.error("ابتدا وارد حساب کاربری خود شوید.");
        return 0;
      }

      const response = await publicApiServices.post("/api/orders", {
        user: user,
        products: [{ product: productID.split("/")[4], count: quantity }],
        deliveryStatus: deliveryStatus,
      });

      console.log(response.data);
      // /userProfile/cart
      navigate("/userProfile/cart");
    } catch (error) {
      console.error("Error creating order:", error);
      // Handle error here
    }
  };

  const handleIncrease = () => {
    if (quantity < product.quantity && product.quantity !== 0) {
      setQuantity(quantity + 1);
    } else if (product.quantity === 0) {
      setQuantity(0);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-container">
      {product && (
        <div className="product-wrapper">
          <ImageGallery images={product.images} />
          <div className="product-details">
            <h2>نام: {product.name}</h2>
            <p>برند: {product.brand}</p>
            <p>قیمت: {formatNumberToCurrency(product.price)}</p>
            <p>تعداد: {product.quantity} عدد</p>
            <div className="product-actions">
              <div className="buy-button">
                {product.quantity === 0 ? (
                  <button
                    className="button-30"
                    disabled
                    style={{ cursor: "not-allowed" }}
                  >
                    ناموجود
                  </button>
                ) : (
                  <button className="button-30" onClick={handleCreateOrder}>
                    خرید
                  </button>
                )}
              </div>
              <div className="product-quantity">
                <span onClick={handleIncrease}>+</span>
                <b>{quantity}</b>
                <span onClick={handleDecrease}>-</span>
              </div>
            </div>
          </div>
          <ProductDescription description={product.description} />
        </div>
      )}
    </div>
  );
};

export default Product;
