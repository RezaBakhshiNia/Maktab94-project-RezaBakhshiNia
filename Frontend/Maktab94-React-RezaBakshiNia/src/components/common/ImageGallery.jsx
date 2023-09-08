import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-gallery">
      <img
        className="main-image"
        src={`http://localhost:8000/images/products/images/${selectedImage}`}
        alt="Main Image"
      />
      <div className="thumbnail-container">
      <Swiper spaceBetween={50} slidesPerView={4}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
          <img
            key={index}
            className={`thumbnail ${image === selectedImage ? "active" : ""}`}
            src={`http://localhost:8000/images/products/images/${image}`}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          /></SwiperSlide>
        ))}</Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
