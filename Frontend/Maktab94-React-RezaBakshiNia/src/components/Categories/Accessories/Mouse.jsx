import { useEffect, useState } from "react";
import publicApiServices from "../../../services/publicApi";
import { Link } from "react-router-dom";
import ProductCart from "../../common/ProductCart";


const Mouse = () => {
  const [products, setProducts] = useState([]);
  const [deleteAllFilters, setDeleteAllFilters] = useState(false);
  const [sortingType, setSortingType] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get(
          `/api/products?page=0&limit=0&fields=-rating,-createdAt,-updatedAt,-__v&sort=price&name[gte]=8`
        );
        if (sortingType === "asc") {
          setProducts(
            response.data.data.products
              .sort((a, b) => a.price - b.price)
              .filter(
                (product) => product.subcategory === "64df3fcf53474ab1d394ac4d"
              )
          );
        } else if (sortingType === "des") {
          setProducts(
            products
              .sort((a, b) => b.price - a.price)
              .filter(
                (product) => product.subcategory === "64df3fcf53474ab1d394ac4d"
              )
          );
        } else {
          setProducts(
            response.data.data.products.filter(
              (product) => product.subcategory === "64df3fcf53474ab1d394ac4d"
            )
          );
        }

        console.log(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [deleteAllFilters, sortingType]);

  const handleProductAvailability = (param) => {
    if (param === "all") {
      setDeleteAllFilters(!deleteAllFilters);
    } else if (param === "available") {
      setProducts(products.filter((item) => item.quantity !== 0));
    } else if (param === "unavailable") {
      setProducts(products.filter((item) => item.quantity === 0));
    }
  };

  const handleAscendingSort = () => {
    setSortingType("asc");
  };
  const handleDescendingSort = () => {
    setSortingType("des");
  };

  return (
    <div className="laptops-container">
      <div className="laptops-wrapper">
        <aside>
          <div className="filter-brand">
            <h4>برند:</h4>
            <div>
              <Link to={"/category/accessory/mouse"}>موس</Link>
              <Link to={"/category/accessory/fan"}>فن</Link>
              <Link to={"/category/accessory/charger"}>شارژر</Link>
              <Link to={"/category/accessory/ram"}>رم</Link>
            </div>
          </div>
          <div className="filter-exist">
            <h6>موجودی:</h6>
            <div className="filter-exist-items">
              <span onClick={() => handleProductAvailability("available")}>
                موجود
              </span>
              <span onClick={() => handleProductAvailability("all")}>همه</span>
              <span onClick={() => handleProductAvailability("unavailable")}>
                ناموجود
              </span>
            </div>
          </div>
          <div className="sort-price">
            <h6>ترتیب قیمت:</h6>
            <div className="sort-price-items">
              <span onClick={() => handleAscendingSort()}>صعودی</span>
              <span onClick={() => handleDescendingSort()}>نزولی</span>
            </div>
          </div>
        </aside>
        <div className="laptop-products">
          {products &&
            products.map((item) => (
              <Link key={item._id} to={`/product/${item._id}`}>
                <ProductCart
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  imageSrc={`http://localhost:8000/images/products/images/${item.images[0]}`}
                  quantity={item.quantity}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mouse;
