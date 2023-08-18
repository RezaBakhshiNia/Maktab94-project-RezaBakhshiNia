const DeliveryModal = () => {
  return (
    <div id="DeliveryModal">
      <div className="DeliveryModal_head-title">
        <p>نمایش سفارش</p>
        <i className="bi bi-x-circle-fill" />
      </div>
      <div className="Delivery_info">
        <div className="Delivery_customer-address">
          <span>نام مشتری:</span> <span>فلان</span>
        </div>
        <div className="">
          <span>آدرس:</span> <span>فلان</span>
        </div>
        <div className="">
          <span>تلفن:</span> <span>فلان</span>
        </div>
        <div className="">
          <span>زمان تحویل:</span> <span>فلان</span>
        </div>
        <div className="">
          <span>زمان سفارش:</span> <span>فلان</span>
        </div>
      </div>
      <div className="Delivery_table-info">
        <table className="products-table rounded-table">
          <thead>
            <tr>
              <th scope="col">کالا</th>
              <th scope="col">قیمت</th>
              <th scope="col">تعداد</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="کالا">لپ تاپ 22 اینچ لنوو</td>
              <td data-label="قیمت">
                <p>20,000,000</p>
              </td>
              <td data-label="تعداد">42</td>
            </tr>
            <tr>
              <td data-label="کالا">لپ تاپ 22 اینچ لنوو</td>
              <td data-label="قیمت">
                <p>20,000,000</p>
              </td>
              <td data-label="تعداد">42</td>
            </tr>
            <tr>
              <td data-label="کالا">لپ تاپ 22 اینچ لنوو</td>
              <td data-label="قیمت">
                <p>20,000,000</p>
              </td>
              <td data-label="تعداد">42</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="Add-new-product">ذخیره شد</button>
    </div>
  );
};

export default DeliveryModal;
