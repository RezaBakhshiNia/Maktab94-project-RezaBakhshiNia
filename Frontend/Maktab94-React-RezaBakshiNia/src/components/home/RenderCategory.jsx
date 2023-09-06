import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCart from "../common/ProductCart";

const RenderCategory = ({ data, id, title }) => {
  console.log(data);

  return (
    <div className="renderCategory-container">
      <h3>{title}</h3>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {data.map((product) =>
          product.category === id ? (
            <SwiperSlide key={product._id}>
              <Link to={`product/${product._id}`}>
              <ProductCart
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  imageSrc={`http://localhost:8000/images/products/images/${product.images[0]}`}
                  quantity={product.quantity}
                />
              </Link>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default RenderCategory;
