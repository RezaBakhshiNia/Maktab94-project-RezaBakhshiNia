const ProductCart = ({ name, brand, price, imageSrc, quantity }) => {
  return (
    <div className="product">
      <img src={`${imageSrc}`} alt={`${name}`} />
      <div className="product-cart-details">
        <p>
          <span>نام: </span>
          <span>{name}</span>
        </p>
        <p>
          <span>برند: </span>
          <span>{brand}</span>
        </p>
        <p>
          <span>قیمت: </span>
          <span>{price} تومان</span>
        </p>
      </div>
      <div className="product-cart-actions">
        {quantity === 0 ? (
          <span>ناموجود</span>
        ) : (
          <span className="add-to-cart-icon">
            <i className="bi bi-cart-check" />
          </span>
        )}
        <span className="add-to-wish-list-icon">
          <i className="bi bi-heart" />
        </span>
        <span className="add-to-comparison-icon">
          <i className="bi bi-shuffle" />
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
