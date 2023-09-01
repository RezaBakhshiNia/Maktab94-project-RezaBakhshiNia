import { Tooltip } from "react-tippy";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import publicApiServices from "../../services/publicApi";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Pagination from "./common/pagination";
import DeleteModalContainer from "./common/DeleteModalContainer";
import AddEditProductModal from "./AddEditProductModal";

Modal.setAppElement("#root");

const AdminProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productDetailsForModal, setProductDetailsForModal] = useState(null);
  const [products, setProducts] = useState(null);
  const [sortingType, setSortingType] = useState("price&name");
  const [totalPages, setTotalPages] = useState(null);
  const [triggerChanges, setTriggerChanges] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get(
          `/api/products?page=${currentPage}&limit=5&fields=-rating,-createdAt,-updatedAt,-__v&sort=${sortingType}[gte]=8`
        );
        setProducts(response.data.data.products);
        console.log(response.data.data.products);
        console.log(response.data);
        setTotalPages(+response.data?.total_pages || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, sortingType, triggerChanges]);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleDelete = async (id) => {
    try {
      const response = await publicApiServices.delete(`/api/products/${id}`);
      const resault = response.data;
      console.log(resault);
      toast.success("محصول با موفقیت حذف شد.");
      setTriggerChanges(!triggerChanges);
    } catch (error) {
      console.error(error);
      toast.error("خطاء در فرایند حذف محصول.");
    }
  };
  return (
    <div className="products-table-container">
      <table className="products-table rounded-table">
        <thead>
          <tr>
            <th scope="col">تصویر</th>
            <th scope="col" onClick={() => setSortingType("name&brand")}>
              نام کالا
            </th>
            <th scope="col" onClick={() => setSortingType("brand&name")}>
              دسته بندی
            </th>
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
                        setProductDetailsForModal({
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
                    <i
                      className="bi bi-wrench-adjustable"
                      onClick={() => {
                        navigate(
                          `/admin/products/AddEditProduct/${item._id}`
                        );
                        localStorage.setItem('editProductById', item._id);
                        setEditModalIsOpen(true);
                      }}
                    />
                  </Tooltip>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination-addNewItemBtn">
        <button
          className="Add-new-product"
          onClick={() => setEditModalIsOpen(true)}
        >
          افزودن کالا
        </button>
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          direction={"ltr"}
        />
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
        <DeleteModalContainer
          productDetailsForModal={productDetailsForModal}
          handleDelete={handleDelete}
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>
      {editModalIsOpen && (
        <AddEditProductModal setEditModalIsOpen={setEditModalIsOpen} />
      )}
    </div>
  );
};

export default AdminProductsPage;
