import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.scss";
import { useEffect, useState } from "react";
import publicApiServices from "../../services/publicApi";
import RenderCategory from "./RenderCategory";
import Blogs from "./Blogs";

const LandingPage = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get(
          `/api/products?page=0&limit=0&fields=-rating,-createdAt,-updatedAt,-__v&sort=price&name[gte]=8`
        );
        setProducts(response.data.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homePage-container">
      <div className="homePage-wrapper">
        <div className="homePage_heading">
          <div className="homePage_imageSlider">
            <Swiper spaceBetween={50} slidesPerView={3}>
              <SwiperSlide>
                <img
                  src="https://www.lioncomputer.com/storage/image/2023/8/1692793615-mf2Z9aEUkxggNrCW.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.lioncomputer.com/storage/image/2023/8/1692778015-kakTJYRWBlIIXbjL.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.lioncomputer.com/storage/image/2023/7/1690035711-zz8suxGeuFEiiw9E.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.lioncomputer.com/storage/image/2023/7/1688896968-wRrurSa1KK3GOuOz.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="discountsAndAssemble">
            <div>
              <img
                src="https://www.lioncomputer.com/storage/image/2023/8/1692447309-u8zk3kTs0jzEeeUi.webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.lioncomputer.com/storage/image/2023/7/1689757511-nA3r2guOCnQusdxP.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        {products && (
          <RenderCategory
            id={"64d7be93d55bdaf03d308604"}
            data={products}
            title={"لپتاپ ها"}
          />
        )}
        {products && (
          <RenderCategory
            id={"64df3ea553474ab1d394ac48"}
            data={products}
            title={"لوازم جانبی"}
          />
        )}
        <Blogs/>
      </div>
    </div>
  );
};

export default LandingPage;
