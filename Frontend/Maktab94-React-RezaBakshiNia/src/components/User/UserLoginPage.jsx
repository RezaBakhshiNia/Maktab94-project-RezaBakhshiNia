import { useFormik } from "formik";
import { schema } from "../../services/formSchema";
import publicApiServices from "../../services/publicApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    try {
      const response = await publicApiServices.post("/api/auth/login", {
        username: values.userName,
        password: values.password,
      });

      // Assuming the response contains the access token and refresh token
      const { accessToken, refreshToken } = response.data.token;
      localStorage.setItem("userLogedIn", response.data.data.user._id);

      // Save the tokens in cookies using js-cookie
      Cookies.set("userAccessToken", accessToken);
      Cookies.set("userRefreshToken", refreshToken);

      publicApiServices.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      // Navigate the user to another page
      navigate("/userProfile/cart");
    } catch (error) {
      // Handle error if the login request fails
      console.error(error);
    }
  };
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
  return (
    <div className="content">
      <img src="../src/assets/user-ui-image.png" />
      <div className="text">ورود کاربر</div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="field">
          <i className="bi bi-person"></i>
          <input
            type="text"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>نام کاربری</label>
        </div>
        <small className="input-error_message">
          {errors.userName && touched.userName && errors.userName}
        </small>
        <div className="field">
          <i className="bi bi-lock"></i>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>رمز</label>
        </div>
        <small className="input-error_message">
          {errors.password && touched.password && errors.password}
        </small>
        <button disabled={isSubmitting} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default UserLoginPage;
