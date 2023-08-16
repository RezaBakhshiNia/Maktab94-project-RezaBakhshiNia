import "./AdminLogIn.scss";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

const schema = yup.object().shape({
  userName: yup
    .string()
    .min(4, "حداقل 4 حرف.")
    .max(16, "حداکثر 16 حرف.")
    .required("نام کاربری الزامی است.")
    .matches(/^[a-zA-Z0-9]*$/, { message: "شامل اعداد و حروف انگلیسی باشد." }),
  password: yup
    .string()
    .min(5, "حداقل 5 حرف.")
    .matches(passwordRegEx, { message: "شامل اعداد و حروف انگلیسی باشد." })
    .required("رمز الزامی است."),
});

const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
  actions.resetForm();
};

const AdminLogIn = () => {
  const [inputType, setInputType] = useState("password");

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit,
  });
  console.log(errors);

  return (
    <>
      <div className="AdminLogIn_container">
        <div className="AdminLogIn_logo">
          <div className="AdminLogIn_logo--circle">
            <img
              src="./src/assets/admin-ui-image.png"
              className="logo__svg"
              alt=""
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="AdminLogIn_form"
          autoComplete="off"
        >
          <div className="AdminLogIn_form__title">
            <h3>پنل ادمین</h3>
          </div>
          <div className="AdminLogIn_form__group">
            <div className="AdminLogIn_form__icon">
              <i className="bi bi-person-fill"></i>
            </div>
            <input
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="AdminLogIn_form__control"
              type="text"
              placeholder="نام کاربری"
            />
            <small className="input-error_message">
              {errors.userName && touched.userName && errors.userName}
            </small>
          </div>
          <div className="AdminLogIn_form__group">
            <div className="AdminLogIn_form__icon">
              <i
                className={`bi ${
                  inputType === "password" ? "bi-lock-fill" : "bi-unlock-fill"
                } cursor`}
                onClick={() =>
                  inputType === "password"
                    ? setInputType("text")
                    : setInputType("password")
                }
              ></i>
            </div>
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="AdminLogIn_form__control"
              type={inputType}
              placeholder="رمز"
            />
            <small className="input-error_message">
              {errors.password && touched.password && errors.password}
            </small>
          </div>
          <div>
            <button
              disabled={isSubmitting}
              className="AdminLogIn_form__button"
              type="submit"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogIn;
