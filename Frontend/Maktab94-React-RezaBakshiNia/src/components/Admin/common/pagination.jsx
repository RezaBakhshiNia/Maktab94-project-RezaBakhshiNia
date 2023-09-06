import { toast } from "react-toastify";

const Pagination = ({
  pageNumbers,
  currentPage,
  setCurrentPage,
  direction,
  editedData,
}) => {
  const paginationHandler = (pageNumber) => {
    if (editedData && editedData.length > 0) {
      toast.error("ابتدا تغییرات را ذخیره کنید.");
    } else {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <nav dir={direction} aria-label="...">
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
              style={{ zIndex: "0" }}
              onClick={() => paginationHandler(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
