import { Tooltip } from "react-tippy";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import publicApiServices from "../../services/publicApi";
import Modal from "react-modal";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const AdminProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [products, setProducts] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);
  const [productForDetails, setProductForDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get(
          `/api/products?page=${currentPage}&limit=5&fields=-rating,-createdAt,-updatedAt,-__v&sort=price&quantity[gte]=8`
        );
        setTotalPages(+response.data.total_pages);
        console.log(+response.data.total_pages);
        setProducts(response.data.data.products);
        console.log(response.data.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, triggerDelete]);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const deleteProductById = async (id) => {
    try {
      const response = await publicApiServices.delete(`/api/products/${id}`);
      console.log("Product deleted successfully:", response.data);
      toast.success("محصول مورد نظر حذف شد.");
      setTriggerDelete(!triggerDelete);
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("حذف محصول با خطاء مواجه شد.");
    }
  };

  const handleDelete = (id) => {
    deleteProductById(id);
    setModalIsOpen(false);
  };

  return (
    <div className="products-table-container">
      <table className="products-table rounded-table">
        <thead>
          <tr>
            <th scope="col">تصویر</th>
            <th scope="col">نام کالا</th>
            <th scope="col">دسته بندی</th>
            <th scope="col">اعمال تغییرات</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => (
              <tr key={index + 1}>
                <td data-label="تصویر">
                  <img
                    src={`http://localhost:8000/images/products/images/${item.images[0]}`}
                    alt={item.slugname}
                    id="data-image"
                  />
                </td>
                <td data-label="نام کالا">{item.name}</td>
                <td data-label="دسته بندی">{item.brand}</td>
                <td className="action-icon" data-label="اعمال تغییرات">
                  <Tooltip
                    title="حذف محصول"
                    position="top"
                    trigger="mouseenter"
                  >
                    <i
                      className="bi bi-trash3-fill"
                      onClick={() => {
                        setProductForDetails({
                          name: item.name,
                          image: `http://localhost:8000/images/products/images/${item.images[0]}`,
                          id: item._id,
                        });
                        setModalIsOpen(true);
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    title="ویرایش محصول"
                    position="top"
                    trigger="mouseenter"
                  >
                    <i className="bi bi-wrench-adjustable" />
                  </Tooltip>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination-addNewItemBtn">
        <button className="Add-new-product">افزودن کالا</button>
        <nav dir="ltr" aria-label="...">
          <ul className="pagination pagination-sm">
            {pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${
                  pageNumber === currentPage ? "active" : ""
                }`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                <a
                  className="page-link"
                  to="#"
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Delete Confirmation Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.195)",
          },
          content: {
            width: "60%",
            height: "max-content",
            margin: "auto",
            border: "1px solid #ccc",
            borderRadius: "9px",
            padding: "15px",
            textAlign: "center",
          },
        }}
      >
        <div className="deleteModalContainer">
          <h4>تایید حذف محصول</h4>
          <img
            src={productForDetails && productForDetails.image}
            alt="modal-delete-image"
          />
          <p>
            از حذف محصول {productForDetails && productForDetails.name} اطمینان
            دارید؟
          </p>
          <button
            id="confrim-btn_delete-Modal"
            onClick={() => handleDelete(productForDetails.id)}
          >
            حذف شود
          </button>
          <button
            id="cancel-btn_delete-Modal"
            onClick={() => setModalIsOpen(false)}
          >
            لغو
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminProductsPage;
