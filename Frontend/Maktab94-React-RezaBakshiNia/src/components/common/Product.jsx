import { useEffect, useState } from "react";
import publicApiServices from "../../services/publicApi";

const Product = () => {
  const productID = `${window.location.href}`;
  console.log(productID.split("/")[4]);
  const [product, setProduct] = useState(null);
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
              <button class="button-30" role="button">
                خرید
              </button>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
