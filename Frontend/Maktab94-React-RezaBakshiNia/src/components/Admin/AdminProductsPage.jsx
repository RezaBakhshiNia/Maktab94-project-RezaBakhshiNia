import { Tooltip } from "react-tippy";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminProductsPage = () => {
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
          <tr>
            <td data-label="تصویر">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/b012bf189bab93b7f336e01f53e7d14211feeb0f_1676199655.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                alt="لپتاپ"
                id="data-image"
              />
            </td>
            <td data-label="نام کالا">TUF-2050</td>
            <td data-label="دسته بندی">laptop</td>
            <td className="action-icon" data-label="اعمال تغییرات">
              <Tooltip title="حذف محصول" position="top" trigger="mouseenter">
                <i className="bi bi-trash3-fill" />
              </Tooltip>
              <Tooltip title="ویرایش محصول" position="top" trigger="mouseenter">
                <i className="bi bi-wrench-adjustable" />
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="تصویر">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/b012bf189bab93b7f336e01f53e7d14211feeb0f_1676199655.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                alt="لپتاپ"
                id="data-image"
              />
            </td>
            <td data-label="نام کالا">TUF-2050</td>
            <td data-label="دسته بندی">laptop</td>
            <td className="action-icon" data-label="اعمال تغییرات">
              <Tooltip title="حذف محصول" position="top" trigger="mouseenter">
                <i className="bi bi-trash3-fill" />
              </Tooltip>
              <Tooltip title="ویرایش محصول" position="top" trigger="mouseenter">
                <i className="bi bi-wrench-adjustable" />
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="تصویر">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/b012bf189bab93b7f336e01f53e7d14211feeb0f_1676199655.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                alt="لپتاپ"
                id="data-image"
              />
            </td>
            <td data-label="نام کالا">TUF-2050</td>
            <td data-label="دسته بندی">laptop</td>
            <td className="action-icon" data-label="اعمال تغییرات">
              <Tooltip title="حذف محصول" position="top" trigger="mouseenter">
                <i className="bi bi-trash3-fill" />
              </Tooltip>
              <Tooltip title="ویرایش محصول" position="top" trigger="mouseenter">
                <i className="bi bi-wrench-adjustable" />
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="تصویر">
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/b0214f645db64a9c4b13a042da0136100a82d9a1_1676199654.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                alt="لپتاپ"
                id="data-image"
              />
            </td>
            <td data-label="نام کالا">TUF-2050</td>
            <td data-label="دسته بندی">laptop</td>
            <td className="action-icon" data-label="اعمال تغییرات">
              <Tooltip title="حذف محصول" position="top" trigger="mouseenter">
                <i className="bi bi-trash3-fill" />
              </Tooltip>
              <Tooltip title="ویرایش محصول" position="top" trigger="mouseenter">
                <i className="bi bi-wrench-adjustable" />
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination-addNewItemBtn">
        <button className="Add-new-product">افزودن کالا</button>
        <nav dir="ltr" aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminProductsPage;
