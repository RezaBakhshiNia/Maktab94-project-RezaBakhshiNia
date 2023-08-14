import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminHomePage from "./components/Admin/AdminHomePage";
import AdminOrdersPage from "./components/Admin/AdminOrdersPage";
import AdminProductsPage from "./components/Admin/AdminProductsPage";
import InventoryAndPrices from "./components/Admin/InventoryAndPrices";
import UserProfile from "./pages/UserProfile";
import Cart from "./components/User/Cart";
import Profile from "./components/User/Profile";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import AdminLogIn from "./components/Auth/AdminLogIn";
import PageNotFound from "./pages/PageNotFound";
import Comparison from "./pages/Comparison";
import Products from "./components/common/Products";
import Product from "./components/common/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* everything we pass here will replace in Outlet */}
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/*" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<AdminHomePage />} />
            <Route path="products" element={<AdminProductsPage />} />
            <Route path="inventory-prices" element={<InventoryAndPrices />} />
            <Route path="orders" element={<AdminOrdersPage />} />
          </Route>
          <Route path="userProfile" element={<UserProfile />}>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="userLogin" element={<LogIn />} />
          <Route path="userSignUp" element={<SignUp />} />
          <Route path="admin-authentication" element={<AdminLogIn />} />
          <Route path="comparison" element={<Comparison />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
