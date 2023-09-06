import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const RenderSubCategory = ({ data, id, title}) => {
  return (
    <div className="renderCategory-container">
      <h3>{title}</h3>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {data.map((product) =>
          product.subcategory === id ? (
            <SwiperSlide key={product._id}>
              <Link to={`product/${product._id}`}>
                <div className="product-with-same-category">
                  <img
                    src={`http://localhost:8000/images/products/images/${product.images[0]}`}
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                  <small>{product.price} تومان</small>
                </div>
              </Link>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default RenderSubCategory;