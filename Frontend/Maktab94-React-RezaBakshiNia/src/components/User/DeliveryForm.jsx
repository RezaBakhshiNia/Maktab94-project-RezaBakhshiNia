import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { validationSchema } from "../../services/formSchema";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  deliveryDate: null,
};

const DeliveryForm = () => {
  const navigate = useNavigate();
  const productsPurchase = localStorage.getItem("finalPurchase");

  const handleSubmit = async (values) => {
    const previousOrders = localStorage.getItem("ordersInCart");
    const order = JSON.parse(previousOrders);
    console.log({ order, purchaseDetails: values });
    const objectToPost = { order, purchaseDetails: values };
    localStorage.setItem("ordersInCart", JSON.stringify(objectToPost));
    navigate("/Payment-Gateway");
  };

  return (
    <div className="finalize-purchase">
      <h2>نهایی کردن خرید</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <div className="form-group">
            <label htmlFor="firstName">نام:</label>
            <Field type="text" className="form-control" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">نام خانوادگی:</label>
            <Field type="text" className="form-control" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="address">آدرس:</label>
            <Field type="text" className="form-control" name="address" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">شماره موبایل:</label>
            <Field type="text" className="form-control" name="phoneNumber" />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="error"
            />
          </div>

          <div className="form-group date-picker">
            <label htmlFor="deliveryDate">تاریخ تحویل:</label>
            <Field name="deliveryDate" type="date" />
            <ErrorMessage
              name="deliveryDate"
              component="div"
              className="error"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            پرداخت
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default DeliveryForm;
