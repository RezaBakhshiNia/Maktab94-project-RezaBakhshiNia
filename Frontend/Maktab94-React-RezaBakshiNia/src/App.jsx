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
import Category from "./components/Categories/Category";
import LapTops from "./components/Categories/LapTop/LapTops";
import Accessories from "./components/Categories/Accessories/Accessories";
import Asus from "./components/Categories/LapTop/Asus";
import Dell from "./components/Categories/LapTop/Dell";
import HP from "./components/Categories/LapTop/HP";
import Apple from "./components/Categories/LapTop/Apple";
import Mouse from "./components/Categories/Accessories/Mouse";
import Fan from "./components/Categories/Accessories/Fan";
import Rams from "./components/Categories/Accessories/Rams";
import Charger from "./components/Categories/Accessories/Charger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* everything we pass here will replace in Outlet */}
          <Route index element={<Home />} />
          <Route path="category" element={<Category />}>
            {/* laptop */}
            <Route path="laptop" element={<LapTops />} />
            <Route path="laptop/asus" element={<Asus />} />
            <Route path="laptop/dell" element={<Dell />} />
            <Route path="laptop/hp" element={<HP />} />
            <Route path="laptop/apple" element={<Apple />} />
            {/* accessory */}
            <Route path="accessory" element={<Accessories />} />
            <Route path="accessory/mouse" element={<Mouse />} />
            <Route path="accessory/fan" element={<Fan />} />
            <Route path="accessory/charger" element={<Charger />} />
            <Route path="accessory/ram" element={<Rams />} />
          </Route>
          <Route path="products" element={<Products />}>
            {/* get all pruducts */}
          </Route>
          <Route path="product/*" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<AdminHomePage />} />
            <Route path="products/*" element={<AdminProductsPage />} />
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
