const InventoryAndPrices = () => {
  return (
    <div className="InventoryAndPrices">
      <div className="InventoryAndPrices-head-title">
        <h3>صفحه موجودی وقیمت ها</h3>
        <button className="Add-new-product">ذخـیره</button>
      </div>
      <table className="products-table rounded-table">
        <thead>
          <tr>
            <th scope="col">کالا</th>
            <th scope="col">قیمت</th>
            <th scope="col">موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="کالا">لپ تاپ 22 اینچ لنوو</td>
            <td data-label="قیمت">
              <p>20,000,000</p>
            </td>
            <td data-label="موجودی">42</td>
          </tr>
          <tr>
            <td data-label="کالا">لپ تاپ 22 اینچ لنوو</td>
            <td data-label="قیمت">
              <p>20,000,000</p>
            </td>
            <td data-label="موجودی">42</td>
          </tr>
          <tr>
            <td data-label="کالا">لپ تاپ 22 اینچ لنوو</td>
            <td data-label="قیمت">
              <p>20,000,000</p>
            </td>
            <td data-label="موجودی">42</td>
          </tr>
        </tbody>
      </table>
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
  );
};

export default InventoryAndPrices;
