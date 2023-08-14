import './AdminLogIn.scss';

const AdminLogIn = () => {
  return (
    <>
      <div className="AdminLogIn_container">
        <div className="AdminLogIn_logo">
          <div className="AdminLogIn_logo--circle">
            <img src="./src/assets/admin-ui-image.png" className="logo__svg" alt="" />
          </div>
        </div>
        <form className="AdminLogIn_form">
          <div className="AdminLogIn_form__title">
            <h3>پنل ادمین</h3>
          </div>
          <div className="AdminLogIn_form__group">
            <div className="AdminLogIn_form__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
              </svg>
            </div>
            <input
              className="AdminLogIn_form__control"
              type="text"
              placeholder="نام کاربری"
            />
          </div>
          <div className="AdminLogIn_form__group">
            <div className="AdminLogIn_form__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
            </div>
            <input
              className="AdminLogIn_form__control"
              type="password"
              placeholder="رمز"
            />
          </div>
          <div>
            <button className="AdminLogIn_form__button" type="submit">
              ورود
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogIn;
