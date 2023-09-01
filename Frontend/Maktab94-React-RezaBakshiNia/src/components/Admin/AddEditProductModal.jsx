import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import adminApiServices from "../../services/interceptor";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEditProductModal = ({ setEditModalIsOpen }) => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();
  const editProductById = localStorage.getItem("editProductById");

  if (editProductById !== "false") {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await adminApiServices.get(
            `http://localhost:8000/api/products/${editProductById}`
          );
          const data = response.data.data.product;
          setProductName(data.name);
          setProductImage([
            `http://localhost:8000/images/products/images/${data.images[0]}`,
          ]);
          setProductCategory(data.category._id);
          setProductSubCategory(data.subcategory._id);
          setProductDescription(data.description);
          setSelectedFiles([
            `http://localhost:8000/images/products/images/${data.images[0]}`,
          ]);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchData();
    }, []);
  }
  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };
  const handleImageChange = (files) => {
    const previewArray = [];
    for (const obj of files) {
      previewArray.push(obj.preview);
    }
    console.log(previewArray);
    setProductImage(previewArray);
  };
  const handleCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };
  const handleSubCategoryChange = (event) => {
    setProductSubCategory(event.target.value);
  };
  const handleDescriptionChange = (value) => {
    setProductDescription(value);
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: Date.now(),
        })
      ),
    ]);
  };
  const handleRemoveFile = (id) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file) => file.id !== id)
    );
  };
  useEffect(() => {
    handleImageChange(selectedFiles);
    console.log(productImage);
    console.log(selectedFiles);
  }, [selectedFiles]);
  const handleCloseModal = () => {
    setEditModalIsOpen(false);
    localStorage.setItem("editProductById", false);
    navigate("/admin/products");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const productObject = {
      category: productCategory,
      subcategory: productSubCategory,
      name: productName,
      description: productDescription,
      images: selectedFiles,
      price: "120000",
      brand: "Cooler Master",
    };
    console.log(productObject);
    const form = new FormData();
    for (const key in productObject) {
      const value = productObject[key];
      if (Array.isArray(value)) {
        value.forEach((v) => {
          form.append(key, v);
        });
      } else {
        form.append(key, value);
      }
    }
    if (editProductById !== "false") {
      try {
        // Send the productObject to the server using Axios
        const response = await adminApiServices.patch(
          `/api/products/${editProductById}`,
          form
        );
        console.log("Product submitted successfully:", response.data);
        toast.success("کالا ویرایش شد.");
        handleCloseModal();
      } catch (error) {
        console.error("Error submitting product:", error);
        toast.error("خطاء در ویرایش محصول.");
      }
    } else {
      try {
        // Send the productObject to the server using Axios
        const response = await adminApiServices.post("/api/products", form);
        console.log("Product submitted successfully:", response.data);
        toast.success("کالا به لیست محصولات اضافه شد.");
        setEditModalIsOpen(false);
      } catch (error) {
        console.error("Error submitting product:", error);
        toast.error("خطاء در اضافه کردن محصول.");
      }
    }
  };
  return (
    <div className="Add-Edit-container">
      <div className="Add-Edit-wrapper">
        <div className="Add-Edit-header">
          <span>افزودن/ویرایش کالا</span>
          <i className="bi bi-x-circle-fill" onClick={handleCloseModal} />
        </div>
        <div className="add-edit-form-wrapper">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="uploader-container">
              <input
                name="images"
                required
                className="custom-file-input"
                type="file"
                multiple
                onChange={(e) => {
                  handleFileChange(e);
                }}
                onBlur={() => handleImageChange(selectedFiles)}
              />
              <div className="uploader-gallery">
                {selectedFiles.map((file) => (
                  <div key={file.id} className="gallery-photo">
                    <img src={file.preview || file[0]} alt={file.name} />
                    <i
                      className="bi bi-x-lg"
                      onClick={() => handleRemoveFile(file.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <input
              type="text"
              placeholder="نام کالا"
              id="product-name-input-field"
              name="name"
              required
              value={productName}
              onChange={handleNameChange}
            />
            <div className="AddProduct-SelectOption">
              <select value={productCategory} onChange={handleCategoryChange}>
                <option selected disabled>
                  لطفاً نوع محصول را انتخاب کنید
                </option>
                <option value="64d7be93d55bdaf03d308604">لپ تاپ</option>
                <option value="64df3ea553474ab1d394ac48">لوازم جانبی</option>
              </select>

              {productCategory === "64d7be93d55bdaf03d308604" && (
                <select
                  value={productSubCategory}
                  onChange={handleSubCategoryChange}
                >
                  <option selected disabled>
                    لطفاً برند لپ تاپ را انتخاب کنید
                  </option>
                  <option value="64df409253474ab1d394ac63">ایسوس</option>
                  <option value="64d7bf75d55bdaf03d308609">دل</option>
                  <option value="64df409953474ab1d394ac67">اچ پی</option>
                  <option value="64df407e53474ab1d394ac5f">اپل</option>
                </select>
              )}

              {productCategory === "64df3ea553474ab1d394ac48" && (
                <select
                  value={productSubCategory}
                  onChange={handleSubCategoryChange}
                >
                  <option>لطفاً نوع لوازم جانبی را انتخاب کنید</option>
                  <option value="64df3fcf53474ab1d394ac4d">موس</option>
                  <option value="64df3fdc53474ab1d394ac51">فن</option>
                  <option value="64df3fea53474ab1d394ac59">شارژر</option>
                  <option value="64df3fe453474ab1d394ac55">رم</option>
                </select>
              )}
            </div>
            <ReactQuill
              id="description"
              name="description"
              value={productDescription}
              onChange={handleDescriptionChange}
            />
            <button className="Add-new-product" type="submit">
              ذخیره
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditProductModal;
