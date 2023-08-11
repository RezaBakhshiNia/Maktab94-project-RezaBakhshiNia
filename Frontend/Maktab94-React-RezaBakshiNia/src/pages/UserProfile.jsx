import { Outlet } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <h1>پروفایل کاربر</h1>
      <Outlet />
    </div>
  );
};

export default UserProfile;
