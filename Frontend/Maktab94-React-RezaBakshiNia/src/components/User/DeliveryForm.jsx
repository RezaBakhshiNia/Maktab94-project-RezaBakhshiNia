import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { validationSchema } from "../../services/formSchema";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (values) => {
    const previousOrders = localStorage.getItem("finalPurchase2");
    const finalOrder = [
      previousOrders ? { ...JSON.parse(previousOrders) } : null,
      {
        orders: JSON.parse(productsPurchase),
        purchaseDetails: values,
      },
    ];
    localStorage.setItem("finalPurchase2", JSON.stringify(finalOrder));
    console.log(localStorage.getItem("finalPurchase2"));
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
