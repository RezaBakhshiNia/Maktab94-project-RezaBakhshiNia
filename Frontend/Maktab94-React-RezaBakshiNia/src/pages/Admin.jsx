import { Outlet } from "react-router-dom";
import "react-tippy/dist/tippy.css";


import "../components/Admin/AdminPages.scss";
import AdminSideBarMenu from '../components/Admin/AdminSideBarMenu';
// import { useState } from "react";

function Admin() {
  return (
    <div className="adminPages-container">
      <AdminSideBarMenu/>
      <Outlet />
    </div>
  );
}

export default Admin;
