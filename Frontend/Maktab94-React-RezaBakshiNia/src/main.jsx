import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import "./main.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice.js";

const store = configureStore({
  reducer: {cart: cartReducer},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <App />
      <ToastContainer />
    </>
  </Provider>
);
