import { Outlet } from "react-router-dom";
import "../components/User/User.scss";

const UserProfile = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserProfile;
