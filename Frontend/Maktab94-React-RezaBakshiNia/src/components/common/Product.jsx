import { useEffect, useState } from "react";
import publicApiServices from "../../services/publicApi";

const Product = () => {
  const productID = `${window.location.href}`;
  console.log(productID.split("/")[4]);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get(
          `http://localhost:8000/api/products/${productID.split("/")[4]}`
        );
        setProduct(response.data.data.product);
        console.log(response.data.data.product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleIncrease = () => {
    if (quantity < 25) {
      setQuantity(quantity + 1);
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
          <div className="product-heading">
            <small>
              {product.category.name +
                "/" +
                product.subcategory.name +
                "/" +
                product.name}
            </small>
          </div>
          <div className="product-details">
            <img
              src={`http://localhost:8000/images/products/images/${product.images[0]}`}
              alt={product.name}
            />
            <div className="product-detail">
              <h2>نام: {product.name}</h2>
              <p>توضیحات: {product.description}</p>
              <p>قیمت: {product.price} تومان</p>
              <div className="buy-button">
                {product.quantity < 1 ? (
                  <button className="button-30">خرید</button>
                ) : (
                  <button className="button-30">خرید</button>
                )}
              </div>
              <div className="product-quantity">
                <span onClick={handleIncrease}>+</span>
                <b>{quantity}</b>
                <span onClick={handleDecrease}>-</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
