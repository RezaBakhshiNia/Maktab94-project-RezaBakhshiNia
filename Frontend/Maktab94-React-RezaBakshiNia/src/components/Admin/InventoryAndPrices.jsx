import { useState, useEffect } from "react";
import publicApiServices from "../../services/publicApi";
import { filterAndKeepLatestObjects } from "./helpers/inventoryHandleUpdate";
import Pagination from "./common/pagination";
import adminApiServices from "../../services/interceptor";
import { toast } from "react-toastify";

const InventoryAndPrices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingType, setSortingType] = useState("price&name");
  const [totalPages, setTotalPages] = useState(null);
  const [triggerChanges, setTriggerChanges] = useState(false);
  const [products, setProducts] = useState(null);
  const [productsForMaintain, setProductsForMaintain] = useState([]);

  const [editedData, setEditedData] = useState([]);
  const [editingCells, setEditingCells] = useState([]);
  const [cellValues, setCellValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await publicApiServices.get(
          `/api/products?page=${currentPage}&limit=5&fields=-rating,-createdAt,-updatedAt,-__v&sort=${sortingType}[gte]=8`
        );
        setProducts(
          response.data.data.products.map((product) => [
            product.name,
            product.price,
            product.quantity,
          ])
        );
        setProductsForMaintain(
          response.data.data.products.map((product) => [
            {
              name: product.name,
              id: product._id,
            },
          ])
        );
        console.log(
          response.data.data.products.map((product) => [
            {
              id: product._id,
            },
          ])
        );
        setTotalPages(+response.data?.total_pages || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, sortingType, triggerChanges]);

  const handleUpdate = (rowIndex, columnIndex, value) => {
    const fieldName =
      columnIndex === 0
        ? "name"
        : columnIndex === 1
        ? "price"
        : columnIndex === 2
        ? "quantity"
        : null;

    if (fieldName) {
      const updatedData = {
        [`${fieldName}`]: value,
        id: productsForMaintain[rowIndex][0].id,
      };

      setEditedData((prev) => [...prev, updatedData]);
      products[rowIndex][columnIndex] = value;
    }
  };
  const handleCellClick = (rowIndex, columnIndex) => {
    setEditingCells((prevEditingCells) => [
      ...prevEditingCells,
      { rowIndex, columnIndex },
    ]);
    setCellValues((prevCellValues) => ({
      ...prevCellValues,
      [`${rowIndex}-${columnIndex}`]: products[rowIndex][columnIndex],
    }));
  };

  const handleInputChange = (event, rowIndex, columnIndex) => {
    setCellValues((prevCellValues) => ({
      ...prevCellValues,
      [`${rowIndex}-${columnIndex}`]: event.target.value,
    }));
  };

  const handleInputBlur = (rowIndex, columnIndex) => {
    handleUpdate(
      rowIndex,
      columnIndex,
      cellValues[`${rowIndex}-${columnIndex}`]
    );
    console.log(editedData);
    console.log(filterAndKeepLatestObjects(editedData));
  };

  const handleInputKeyDown = (event, rowIndex, columnIndex) => {
    if (event.key === "Escape") {
      setEditingCells((prevEditingCells) =>
        prevEditingCells.filter(
          (cell) =>
            cell.rowIndex !== rowIndex || cell.columnIndex !== columnIndex
        )
      );
      setCellValues((prevCellValues) => {
        const newCellValues = { ...prevCellValues };
        delete newCellValues[`${rowIndex}-${columnIndex}`];
        return newCellValues;
      });
    }
  };

  const saveDataEdits = async () => {
    if (editedData.length > 0) {
      const patchRequests = editedData.map((item) => {
        const { id, ...payload } = item;
        const patchUrl = `/api/products/${id}`;
        return adminApiServices.patch(patchUrl, payload);
      });

      Promise.all(patchRequests)
        .then((responses) => {
          // Handle the responses here
          console.log("All patch requests completed successfully:", responses);
          toast.success("تغیرات اعمال شد.");
          setEditedData([]);
          setTriggerChanges(!triggerChanges);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error occurred during patch requests:", error);
          toast.error("خطا در ثبت تغییرات");
        });
    } else {
      toast.error("هیچ تغیری ایجاد نشده است.");
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="InventoryAndPrices">
      <div className="InventoryAndPrices-head-title">
        <h3>صفحه موجودی وقیمت ها</h3>
        <button onClick={() => saveDataEdits()} className="Add-new-product">
          ذخـیره
        </button>
      </div>
      <table className="products-table rounded-table">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => {
                setSortingType(`name&name`);
                setEditedData([]);
              }}
            >
              نام کالا
            </th>
            <th
              scope="col"
              onClick={() => {
                setSortingType(`price&name`);
                setEditedData([]);
              }}
            >
              قیمت
            </th>
            <th
              scope="col"
              onClick={() => {
                setSortingType(`quantity&name`);
                setEditedData([]);
              }}
            >
              موجودی
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => {
                  const isEditing =
                    editingCells.findIndex(
                      (editingCell) =>
                        editingCell.rowIndex === rowIndex &&
                        editingCell.columnIndex === columnIndex
                    ) !== -1;
                  return (
                    <td
                      key={columnIndex}
                      onClick={() => handleCellClick(rowIndex, columnIndex)}
                    >
                      {isEditing ? (
                        <input
                          type="text"
                          value={cellValues[`${rowIndex}-${columnIndex}`]}
                          onChange={(event) =>
                            handleInputChange(event, rowIndex, columnIndex)
                          }
                          onBlur={() => handleInputBlur(rowIndex, columnIndex)}
                          onKeyDown={(event) =>
                            handleInputKeyDown(event, rowIndex, columnIndex)
                          }
                          autoFocus
                        />
                      ) : (
                        cell
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        direction={"ltr"}
        editedData={editedData}
      />
    </div>
  );
};

export default InventoryAndPrices;
